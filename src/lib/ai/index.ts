import type { AIResponse } from '@/types';
import type { QueryContext, QueryIntent, RAGResult } from './types';
import { classifyIntent, retrieveDocuments } from './rag';
import { getSystemPrompt, buildUserPrompt } from './prompts';
import { generateResponse, isMockMode } from './providers';
import { runSafetyPipeline } from './safety';

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface ProcessQueryOptions {
  message: string;
  context?: Partial<QueryContext>;
  signal?: AbortSignal;
}

export interface FeedbackPayload {
  queryId: string;
  rating: 'helpful' | 'not_helpful';
  comment?: string;
  intent: QueryIntent;
}

// ---------------------------------------------------------------------------
// Main orchestration
// ---------------------------------------------------------------------------

/**
 * Processes a farmer query end-to-end:
 * 1. Classify intent
 * 2. Retrieve relevant documents (RAG)
 * 3. Build prompt with context and retrieved docs
 * 4. Generate AI response
 * 5. Run safety checks
 * 6. Format and return final response
 */
export async function processQuery(options: ProcessQueryOptions): Promise<AIResponse> {
  const { message, context: rawContext, signal } = options;

  // Merge defaults into context
  const context: QueryContext = {
    language: 'en',
    ...rawContext,
  };

  try {
    // Step 1: Classify intent
    const intent = classifyIntent(message);
    context.intent = intent;

    // Step 2: Retrieve relevant documents
    const ragResult: RAGResult = await retrieveDocuments(message, context);

    // Step 3: Build prompts
    const systemPrompt = getSystemPrompt(intent);
    const userPrompt = buildEnhancedUserPrompt(message, context, ragResult);

    // Step 4: Generate response
    const rawResponse = await generateResponse({
      systemPrompt,
      userPrompt,
      temperature: 0.4,
      maxTokens: 1024,
      signal,
    });

    // Step 5: Parse and validate the response
    const parsed = parseAIResponse(rawResponse, ragResult);

    // Step 6: Safety checks
    const safetyResult = runSafetyPipeline(
      rawResponse,
      intent,
      parsed.sources,
    );

    // Apply safety modifications
    if (!safetyResult.passed) {
      // Replace answer with sanitized version and add safety caution
      return applySafetyOverrides(parsed, safetyResult.safetyCheck, intent);
    }

    // Add disclaimers if required
    if (safetyResult.safetyCheck.requiresDisclaimer) {
      parsed.caution = appendDisclaimer(parsed.caution, intent);
    }

    // Add expert referral if required
    if (safetyResult.safetyCheck.requiresExpertReferral) {
      parsed.recommendedActions = ensureExpertReferral(parsed.recommendedActions);
    }

    return parsed;
  } catch (error) {
    // Graceful degradation: return a safe fallback response
    console.error('[KisanAI] processQuery error:', error);
    return getErrorResponse(error);
  }
}

// ---------------------------------------------------------------------------
// Streaming variant
// ---------------------------------------------------------------------------

/**
 * Streaming version of processQuery. Returns an async iterable of text chunks
 * and a final complete response.
 */
export async function* processQueryStream(options: ProcessQueryOptions): AsyncIterable<{
  chunk?: string;
  done: boolean;
  response?: AIResponse;
}> {
  const { message, context: rawContext, signal } = options;
  const context: QueryContext = { language: 'en', ...rawContext };

  try {
    const intent = classifyIntent(message);
    context.intent = intent;

    const ragResult = await retrieveDocuments(message, context);
    const systemPrompt = getSystemPrompt(intent);
    const userPrompt = buildEnhancedUserPrompt(message, context, ragResult);

    // Import stream function
    const { generateResponseStream } = await import('./providers');
    let fullText = '';

    for await (const chunk of generateResponseStream({
      systemPrompt,
      userPrompt,
      temperature: 0.4,
      maxTokens: 1024,
      signal,
    })) {
      if (chunk.done) break;
      fullText += chunk.text;
      yield { chunk: chunk.text, done: false };
    }

    // Process final response
    const parsed = parseAIResponse(fullText, ragResult);
    const safetyResult = runSafetyPipeline(fullText, intent, parsed.sources);

    let finalResponse = parsed;
    if (!safetyResult.passed) {
      finalResponse = applySafetyOverrides(parsed, safetyResult.safetyCheck, intent);
    }

    yield { done: true, response: finalResponse };
  } catch (error) {
    const fallback = getErrorResponse(error);
    yield { done: true, response: fallback };
  }
}

// ---------------------------------------------------------------------------
// Feedback logging
// ---------------------------------------------------------------------------

const feedbackLog: FeedbackPayload[] = [];

/**
 * Logs user feedback for a response. In production this would write to a
 * database; here it accumulates in memory for evaluation.
 */
export function logFeedback(feedback: FeedbackPayload): void {
  feedbackLog.push({
    ...feedback,
    // Timestamp would be added by the database layer
  });
}

/**
 * Returns accumulated feedback (for testing/debugging).
 */
export function getFeedbackLog(): FeedbackPayload[] {
  return [...feedbackLog];
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Builds an enhanced user prompt that includes RAG context.
 */
function buildEnhancedUserPrompt(
  message: string,
  context: QueryContext,
  ragResult: RAGResult,
): string {
  const basePrompt = buildUserPrompt(message, context);

  if (ragResult.documents.length === 0) {
    return basePrompt;
  }

  const docsText = ragResult.documents
    .map(
      (doc, i) =>
        `[Reference ${i + 1}] (${doc.source}, ${doc.freshness}):\n${doc.content}`,
    )
    .join('\n\n');

  return `${basePrompt}\n\nRelevant reference information:\n${docsText}\n\nUse the above references to inform your answer, but respond in your own words. Cite the sources where appropriate.`;
}

/**
 * Parses the raw AI response string into a typed AIResponse object.
 * Handles both JSON and plain-text responses gracefully.
 */
function parseAIResponse(raw: string, ragResult: RAGResult): AIResponse {
  try {
    // Try to parse as JSON
    const parsed = JSON.parse(raw);

    return {
      answer: String(parsed.answer ?? ''),
      recommendedActions: Array.isArray(parsed.recommendedActions)
        ? parsed.recommendedActions.map(String)
        : [],
      caution: parsed.caution ? String(parsed.caution) : undefined,
      confidence: isValidConfidence(parsed.confidence) ? parsed.confidence : 'medium',
      sources: Array.isArray(parsed.sources)
        ? parsed.sources.map((s: { title: string; url?: string; freshness?: string; type?: string }) => ({
            title: String(s.title ?? ''),
            url: s.url ? String(s.url) : undefined,
            freshness: s.freshness ? String(s.freshness) : undefined,
            type: isValidSourceType(s.type) ? s.type : 'government',
          }))
        : ragResult.documents.map((d) => ({
            title: d.source,
            url: d.sourceUrl,
            freshness: d.freshness,
            type: d.type,
          })),
      followUpQuestions: Array.isArray(parsed.followUpQuestions)
        ? parsed.followUpQuestions.map(String)
        : [],
      language: parsed.language ? String(parsed.language) : 'en',
    };
  } catch {
    // Fallback: treat as plain text answer
    return {
      answer: raw,
      recommendedActions: [],
      caution: 'This is a preliminary response. Please verify with official sources.',
      confidence: 'low',
      sources: ragResult.documents.map((d) => ({
        title: d.source,
        url: d.sourceUrl,
        freshness: d.freshness,
        type: d.type,
      })),
      followUpQuestions: [],
      language: 'en',
    };
  }
}

function isValidConfidence(val: unknown): val is 'low' | 'medium' | 'high' {
  return val === 'low' || val === 'medium' || val === 'high';
}

function isValidSourceType(val: unknown): val is 'government' | 'research' | 'kvk' | 'expert' | 'market' {
  return ['government', 'research', 'kvk', 'expert', 'market'].includes(val as string);
}

/**
 * Applies safety overrides when a response fails safety checks.
 */
function applySafetyOverrides(
  response: AIResponse,
  safetyCheck: import('./types').SafetyCheck,
  intent: QueryIntent,
): AIResponse {
  const safe: AIResponse = { ...response };

  // Replace answer with a safe generic response
  if (!safetyCheck.isSafe) {
    safe.answer = getSafeFallbackAnswer(intent);
    safe.confidence = 'low';
  }

  // Always add caution
  safe.caution = appendDisclaimer(safe.caution, intent);

  // Always include expert referral for unsafe responses
  safe.recommendedActions = ensureExpertReferral(safe.recommendedActions);

  return safe;
}

/**
 * Returns a safe fallback answer for a given intent.
 */
function getSafeFallbackAnswer(intent: QueryIntent): string {
  const fallbacks: Record<QueryIntent, string> = {
    disease:
      'I am unable to provide a specific assessment for this query. Please consult your nearest KVK (Krishi Vigyan Kendra) or agriculture extension officer for proper diagnosis and treatment guidance.',
    weather:
      'Please check the latest weather forecast from IMD (mausam.imd.gov.in) for your area and consult your local agriculture officer for weather-based farming advice.',
    market:
      'For current mandi prices, please check Agmarknet (agmarknet.gov.in) or visit your nearest mandi. Prices change daily, so always verify before making selling decisions.',
    scheme:
      'For information about government schemes, please visit your nearest CSC (Common Service Center) or district agriculture office. They can verify your eligibility and help with the application process.',
    general:
      'I am unable to provide a specific answer to this question. Please consult your local agriculture expert or KVK for guidance.',
  };

  return fallbacks[intent] ?? fallbacks.general;
}

/**
 * Appends intent-specific disclaimers to the caution field.
 */
function appendDisclaimer(existingCaution: string | undefined, intent: QueryIntent): string {
  const disclaimers: Record<QueryIntent, string> = {
    disease:
      'This is a preliminary AI assessment only. For confirmed diagnosis and safe treatment, please consult your local KVK or agriculture extension officer.',
    weather:
      'Weather forecasts can change. Always verify with IMD and check updates regularly.',
    market:
      'Mandi prices change daily. This information is for reference only. Please verify current prices at Agmarknet or your nearest mandi before making any selling decisions.',
    scheme:
      'Eligibility depends on specific criteria determined by the scheme authority. KisanAI does not guarantee scheme approval. Please verify with official sources.',
    general:
      'For critical farming decisions, always consult your local agriculture expert or KVK.',
  };

  const disclaimer = disclaimers[intent] ?? disclaimers.general;

  if (existingCaution) {
    return `${existingCaution}\n\n${disclaimer}`;
  }
  return disclaimer;
}

/**
 * Ensures the recommended actions include an expert/KVK referral.
 */
function ensureExpertReferral(actions: string[]): string[] {
  const hasReferral = actions.some(
    (a) =>
      a.toLowerCase().includes('kvk') ||
      a.toLowerCase().includes('expert') ||
      a.toLowerCase().includes('consult') ||
      a.toLowerCase().includes('extension officer'),
  );

  if (hasReferral) return actions;

  return [
    ...actions,
    'Consult your nearest KVK (Krishi Vigyan Kendra) or agriculture extension officer for personalized guidance',
  ];
}

/**
 * Returns a safe error response when the pipeline fails.
 */
function getErrorResponse(error: unknown): AIResponse {
  const message = error instanceof Error ? error.message : 'Unknown error';

  return {
    answer:
      'Sorry, I encountered an error while processing your question. Please try again or contact support if the issue persists.',
    recommendedActions: [
      'Try rephrasing your question',
      'Check your internet connection',
      'Contact KisanAI support if the problem continues',
    ],
    caution: `Technical details: ${message}. KisanAI is running in safe mode.`,
    confidence: 'low',
    sources: [],
    followUpQuestions: [
      'Would you like to try asking a different question?',
      'Which crop do you need help with?',
    ],
    language: 'en',
  };
}

// ---------------------------------------------------------------------------
// Utility exports
// ---------------------------------------------------------------------------

export { classifyIntent, retrieveDocuments, isMockMode };
export type { QueryContext, QueryIntent, RAGResult };
