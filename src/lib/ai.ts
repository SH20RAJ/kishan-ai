/**
 * KishanAI Unified AI client
 *
 * Orchestrates AI requests with strict automatic fallback logic:
 * Try NVIDIA NIM (NVIDIA credentials) first ➡️ Fallback to your published Cloudflare Worker (free-claude)
 */

import type { AIResponse } from '@/types';

type ChatCompletionResponse = {
  choices?: Array<{
    message?: { content?: string };
    delta?: { content?: string };
  }>;
};

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export interface AIChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AIChatOptions {
  messages: AIChatMessage[];
  temperature?: number;
  maxTokens?: number;
  model?: string;
  stream?: boolean;
}

const WORKER_URL = process.env.FREE_CLAUDE_WORKER_URL || 'https://free-claude.shraj.workers.dev';

/**
 * 1. Non-Streaming Generation: Attempts NVIDIA NIM first, falls back to the Cloudflare Worker
 */
export async function generateChat(options: AIChatOptions): Promise<string> {
  const nvidiaKey = process.env.OPENAI_API_KEY || process.env.NVIDIA_API_KEY;
  const nvidiaBase = process.env.OPENAI_BASE_URL || 'https://integrate.api.nvidia.com/v1';
  const nvidiaModel = process.env.OPENAI_MODEL || 'meta/llama-3.3-70b-instruct';

  const hasNvidiaCreds = nvidiaKey && nvidiaKey.trim().startsWith('nvapi-');

  if (hasNvidiaCreds) {
    try {
      console.log('🤖 [KishanAI] Attempting AI generation via NVIDIA NIM...');
      const response = await fetch(`${nvidiaBase}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${nvidiaKey}`
        },
        body: JSON.stringify({
          model: options.model || nvidiaModel,
          messages: options.messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens ?? 2048,
          stream: false
        })
      });

      if (response.ok) {
        const data = await response.json() as ChatCompletionResponse;
        return data.choices?.[0]?.message?.content ?? '';
      }
      console.warn(`⚠️ [KishanAI] NVIDIA NIM returned HTTP ${response.status}. Initiating worker fallback...`);
    } catch (err: unknown) {
      console.warn('⚠️ [KishanAI] NVIDIA NIM request failed. Initiating worker fallback...', getErrorMessage(err));
    }
  } else {
    console.log('ℹ️ [KishanAI] No NVIDIA credentials detected. Routing directly to Cloudflare Worker...');
  }

  // Graceful Fallback: Fetch from Cloudflare Worker
  console.log(`⚡ [KishanAI] Fetching fallback response from Cloudflare Worker: ${WORKER_URL}`);
  const workerRes = await fetch(`${WORKER_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: options.model || 'anthropic/claude-sonnet-4-6', // Worker handles auto-mapping dynamically!
      messages: options.messages,
      temperature: options.temperature ?? 0.7,
      max_tokens: options.maxTokens ?? 2048,
      stream: false
    })
  });

  if (!workerRes.ok) {
    const errorBody = await workerRes.text();
    throw new Error(`KishanAI Proxy Error: Cloudflare Worker returned HTTP ${workerRes.status} - ${errorBody}`);
  }

  const data = await workerRes.json() as ChatCompletionResponse;
  return data.choices?.[0]?.message?.content ?? '';
}

// ---------------------------------------------------------------------------
// processQuery — full pipeline used by /api/chat
// ---------------------------------------------------------------------------

export interface ProcessQueryOptions {
  message: string;
  context?: {
    crop?: string;
    location?: string;
    language?: string;
  };
}

const SYSTEM_PROMPT = `You are KisanAI, an AI farming assistant for Indian farmers.
Rules:
- Answer in simple, clear language suitable for farmers.
- Support Hindi and English. Default to English unless the user writes in Hindi.
- For disease questions: describe the possible issue, recommend actions, and always advise consulting a local KVK or agriculture officer.
- For weather questions: provide practical farming actions based on the forecast.
- For mandi prices: mention that prices change daily and suggest verifying at the mandi.
- For government schemes: explain eligibility but never guarantee approval.
- Include caution notes for risky advice (chemicals, financial decisions).
- If unsure, say so. Never fabricate information.
- Respond with valid JSON matching this schema:
{
  "answer": "string",
  "recommendedActions": ["string"],
  "caution": "string or null",
  "confidence": "low | medium | high",
  "sources": [{"title": "string", "url": "string or null", "freshness": "string or null"}],
  "followUpQuestions": ["string"]
}`;

function classifyIntent(message: string): string {
  const lower = message.toLowerCase();
  if (/disease|pest|fungus|rot|blight|spot|wilt|infect|yellow|brown.*leaf/i.test(lower)) return 'disease';
  if (/weather|rain|forecast|temperature|humidity|frost|heat/i.test(lower)) return 'weather';
  if (/price|mandi|market|rate|sell|buy|commodity/i.test(lower)) return 'market';
  if (/scheme|subsidy|insurance|pm-kisan|pmfby|loan|kcc|government/i.test(lower)) return 'scheme';
  return 'general';
}

function buildUserPrompt(message: string, context?: ProcessQueryOptions['context']): string {
  const parts = [`Farmer question: ${message}`];
  if (context?.crop) parts.push(`Crop: ${context.crop}`);
  if (context?.location) parts.push(`Location: ${context.location}`);
  if (context?.language) parts.push(`Preferred language: ${context.language}`);
  parts.push('\nRespond with valid JSON only. No markdown, no code fences.');
  return parts.join('\n');
}

export async function processQuery(options: ProcessQueryOptions): Promise<AIResponse> {
  const intent = classifyIntent(options.message);
  const userPrompt = buildUserPrompt(options.message, options.context);

  try {
    const raw = await generateChat({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.4,
      maxTokens: 1024,
    });

    // Try to parse JSON from the response
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]) as AIResponse;
      return {
        answer: parsed.answer || raw,
        recommendedActions: parsed.recommendedActions || [],
        caution: parsed.caution || undefined,
        confidence: parsed.confidence || 'medium',
        sources: parsed.sources || [],
        followUpQuestions: parsed.followUpQuestions || [],
        language: options.context?.language || 'en',
      };
    }

    // If no JSON, use raw text as answer
    return {
      answer: raw,
      recommendedActions: [],
      confidence: 'medium',
      sources: [],
      followUpQuestions: [],
      language: options.context?.language || 'en',
    };
  } catch (err) {
    console.error('[processQuery] Error:', err);
    // Return a safe fallback
    return {
      answer: 'I am sorry, I encountered an error processing your question. Please try again or rephrase your question.',
      recommendedActions: ['Try rephrasing your question', 'Check your internet connection'],
      caution: 'If the problem persists, please contact support.',
      confidence: 'low',
      sources: [],
      followUpQuestions: [],
      language: options.context?.language || 'en',
    };
  }
}

/**
 * 2. Streaming Generation: Attempts NVIDIA NIM first, falls back to the Cloudflare Worker
 */
export async function* streamChat(options: AIChatOptions): AsyncGenerator<string, void, unknown> {
  const nvidiaKey = process.env.OPENAI_API_KEY || process.env.NVIDIA_API_KEY;
  const nvidiaBase = process.env.OPENAI_BASE_URL || 'https://integrate.api.nvidia.com/v1';
  const nvidiaModel = process.env.OPENAI_MODEL || 'meta/llama-3.3-70b-instruct';

  const hasNvidiaCreds = nvidiaKey && nvidiaKey.trim().startsWith('nvapi-');
  let streamSuccess = false;

  if (hasNvidiaCreds) {
    try {
      console.log('🤖 [KishanAI] Attempting streaming via NVIDIA NIM...');
      const response = await fetch(`${nvidiaBase}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${nvidiaKey}`
        },
        body: JSON.stringify({
          model: options.model || nvidiaModel,
          messages: options.messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens ?? 2048,
          stream: true
        })
      });

      if (response.ok && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data: ')) continue;
            
            const payload = trimmed.slice(6).trim();
            if (payload === '[DONE]') {
              streamSuccess = true;
              return;
            }
            
            try {
              const parsed = JSON.parse(payload);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                streamSuccess = true;
                yield delta;
              }
            } catch {}
          }
        }
      } else {
        console.warn(`⚠️ [KishanAI] NVIDIA NIM stream failed with HTTP ${response.status}. Initiating worker fallback...`);
      }
    } catch (err: unknown) {
      console.warn('⚠️ [KishanAI] NVIDIA NIM stream request failed. Initiating worker fallback...', getErrorMessage(err));
    }
  }

  // If NVIDIA stream failed or wasn't available, route to Cloudflare Worker
  if (!streamSuccess) {
    console.log(`⚡ [KishanAI] Routing fallback stream to Cloudflare Worker: ${WORKER_URL}`);
    const workerRes = await fetch(`${WORKER_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: options.model || 'anthropic/claude-sonnet-4-6',
        messages: options.messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens ?? 2048,
        stream: true
      })
    });

    if (!workerRes.ok || !workerRes.body) {
      const errText = await workerRes.text().catch(() => '');
      throw new Error(`Worker streaming initialization failed: HTTP ${workerRes.status} - ${errText}`);
    }

    const reader = workerRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data: ')) continue;
        
        const payload = trimmed.slice(6).trim();
        if (payload === '[DONE]') return;
        
        try {
          const parsed = JSON.parse(payload);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) yield delta;
        } catch {}
      }
    }
  }
}
