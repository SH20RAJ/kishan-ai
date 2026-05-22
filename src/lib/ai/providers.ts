import type { AIResponse } from '@/types';
import type { QueryContext } from './types';

type ChatCompletionResponse = {
  choices?: Array<{
    message?: { content?: string };
  }>;
};

// ---------------------------------------------------------------------------
// Provider types
// ---------------------------------------------------------------------------

export type ProviderName = 'openai' | 'gemini' | 'anthropic' | 'cloudflare' | 'mock';

export interface GenerateOptions {
  systemPrompt: string;
  userPrompt: string;
  temperature?: number;
  maxTokens?: number;
  signal?: AbortSignal;
}

export interface StreamChunk {
  text: string;
  done: boolean;
}

export interface AIProvider {
  readonly name: ProviderName;
  readonly isAvailable: boolean;
  generate(options: GenerateOptions): Promise<string>;
  generateStream(options: GenerateOptions): AsyncIterable<StreamChunk>;
}

// ---------------------------------------------------------------------------
// Provider implementations
// ---------------------------------------------------------------------------

class OpenAIProvider implements AIProvider {
  readonly name: ProviderName = 'openai';
  private apiKey: string;
  private baseUrl: string;
  private model: string;

  constructor(apiKey: string, baseUrl?: string, model?: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl || 'https://api.openai.com/v1';
    this.model = model || 'gpt-4o-mini';
  }

  get isAvailable(): boolean {
    return this.apiKey.length > 0;
  }

  async generate(options: GenerateOptions): Promise<string> {
    const res = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        temperature: options.temperature ?? 0.4,
        max_tokens: options.maxTokens ?? 1024,
        messages: [
          { role: 'system', content: options.systemPrompt },
          { role: 'user', content: options.userPrompt },
        ],
      }),
      signal: options.signal,
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => '');
      throw new Error(`OpenAI API error: ${res.status} ${res.statusText} - ${errBody.slice(0, 200)}`);
    }

    const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    return data.choices?.[0]?.message?.content ?? '';
  }

  async *generateStream(options: GenerateOptions): AsyncIterable<StreamChunk> {
    const res = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        temperature: options.temperature ?? 0.4,
        max_tokens: options.maxTokens ?? 1024,
        stream: true,
        messages: [
          { role: 'system', content: options.systemPrompt },
          { role: 'user', content: options.userPrompt },
        ],
      }),
      signal: options.signal,
    });

    if (!res.ok || !res.body) {
      throw new Error(`OpenAI stream error: ${res.status}`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const payload = line.slice(6).trim();
        if (payload === '[DONE]') {
          yield { text: '', done: true };
          return;
        }
        try {
          const parsed = JSON.parse(payload);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) yield { text: delta, done: false };
        } catch {
          // skip malformed chunks
        }
      }
    }

    yield { text: '', done: true };
  }
}

class GeminiProvider implements AIProvider {
  readonly name: ProviderName = 'gemini';
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  get isAvailable(): boolean {
    return this.apiKey.length > 0;
  }

  async generate(options: GenerateOptions): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: options.systemPrompt }] },
        contents: [{ parts: [{ text: options.userPrompt }] }],
        generationConfig: {
          temperature: options.temperature ?? 0.4,
          maxOutputTokens: options.maxTokens ?? 1024,
        },
      }),
      signal: options.signal,
    });

    if (!res.ok) {
      throw new Error(`Gemini API error: ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  }

  async *generateStream(options: GenerateOptions): AsyncIterable<StreamChunk> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${this.apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: options.systemPrompt }] },
        contents: [{ parts: [{ text: options.userPrompt }] }],
        generationConfig: {
          temperature: options.temperature ?? 0.4,
          maxOutputTokens: options.maxTokens ?? 1024,
        },
      }),
      signal: options.signal,
    });

    if (!res.ok || !res.body) {
      throw new Error(`Gemini stream error: ${res.status}`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        try {
          const parsed = JSON.parse(line.slice(6));
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) yield { text, done: false };
        } catch {
          // skip
        }
      }
    }

    yield { text: '', done: true };
  }
}

class AnthropicProvider implements AIProvider {
  readonly name: ProviderName = 'anthropic';
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  get isAvailable(): boolean {
    return this.apiKey.length > 0;
  }

  async generate(options: GenerateOptions): Promise<string> {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: options.maxTokens ?? 1024,
        system: options.systemPrompt,
        messages: [{ role: 'user', content: options.userPrompt }],
      }),
      signal: options.signal,
    });

    if (!res.ok) {
      throw new Error(`Anthropic API error: ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as { content?: { text?: string }[] };
    return data.content?.[0]?.text ?? '';
  }

  async *generateStream(options: GenerateOptions): AsyncIterable<StreamChunk> {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: options.maxTokens ?? 1024,
        system: options.systemPrompt,
        stream: true,
        messages: [{ role: 'user', content: options.userPrompt }],
      }),
      signal: options.signal,
    });

    if (!res.ok || !res.body) {
      throw new Error(`Anthropic stream error: ${res.status}`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        try {
          const parsed = JSON.parse(line.slice(6));
          if (parsed.type === 'content_block_delta') {
            const text = parsed.delta?.text;
            if (text) yield { text, done: false };
          }
        } catch {
          // skip
        }
      }
    }

    yield { text: '', done: true };
  }
}

/**
 * Cloudflare Worker Provider (Always Available, free, high-performance fallback)
 */
class CloudflareWorkerProvider implements AIProvider {
  readonly name: ProviderName = 'cloudflare';
  private workerUrl: string;

  constructor(workerUrl: string) {
    this.workerUrl = workerUrl || 'https://free-claude.shraj.workers.dev';
  }

  get isAvailable(): boolean {
    return true; // Free Cloudflare Worker proxy is always publicly available
  }

  async generate(options: GenerateOptions): Promise<string> {
    const res = await fetch(`${this.workerUrl}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-sonnet-4-6',
        temperature: options.temperature ?? 0.4,
        max_tokens: options.maxTokens ?? 1024,
        messages: [
          { role: 'system', content: options.systemPrompt },
          { role: 'user', content: options.userPrompt },
        ],
      }),
      signal: options.signal,
    });

    if (!res.ok) {
      throw new Error(`Cloudflare Worker API error: HTTP ${res.status}`);
    }

    const data = (await res.json()) as ChatCompletionResponse;
    return data.choices?.[0]?.message?.content ?? '';
  }

  async *generateStream(options: GenerateOptions): AsyncIterable<StreamChunk> {
    const res = await fetch(`${this.workerUrl}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-sonnet-4-6',
        temperature: options.temperature ?? 0.4,
        max_tokens: options.maxTokens ?? 1024,
        stream: true,
        messages: [
          { role: 'system', content: options.systemPrompt },
          { role: 'user', content: options.userPrompt },
        ],
      }),
      signal: options.signal,
    });

    if (!res.ok || !res.body) {
      throw new Error(`Cloudflare Worker stream error: HTTP ${res.status}`);
    }

    const reader = res.body.getReader();
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
          yield { text: '', done: true };
          return;
        }
        try {
          const parsed = JSON.parse(payload);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) yield { text: delta, done: false };
        } catch {
          // skip
        }
      }
    }

    yield { text: '', done: true };
  }
}

class MockProvider implements AIProvider {
  readonly name: ProviderName = 'mock';
  readonly isAvailable = true;

  async generate(options: GenerateOptions): Promise<string> {
    await new Promise((r) => setTimeout(r, 100));
    const system = options.systemPrompt.toLowerCase();
    let mockAnswer: string;

    if (system.includes('disease') || system.includes('symptom') || system.includes('pest')) {
      mockAnswer = JSON.stringify({
        answer:
          'Based on the symptoms you described, your crop may be affected by a fungal infection. The yellow spots on leaves with brown edges are common signs of early blight or leaf spot disease.',
        recommendedActions: [
          'Remove and destroy affected leaves immediately',
          'Improve air circulation between plants',
          'Avoid overhead watering; water at the base of plants',
          'Apply a recommended fungicide if symptoms persist',
          'Consult your local KVK for specific treatment recommendations',
        ],
        caution:
          'This is a preliminary assessment based on described symptoms. For accurate diagnosis, please consult a local agriculture expert or visit your nearest KVK (Krishi Vigyan Kendra).',
        confidence: 'medium',
        sources: [
          { title: 'ICAR - Crop Disease Management Guidelines', url: 'https://icar.org.in', freshness: 'Updated 2024', type: 'research' },
          { title: 'State Department of Agriculture Advisory', type: 'government', freshness: 'Current season' },
        ],
        followUpQuestions: [
          'What crop are you growing?',
          'How long have you noticed these symptoms?',
          'What is the current weather in your area?',
        ],
      });
    } else if (system.includes('weather') || system.includes('forecast')) {
      mockAnswer = JSON.stringify({
        answer:
          'The weather forecast for your area shows moderate rainfall expected in the next 2-3 days. This is good for your standing crops but you should take some precautions.',
        recommendedActions: [
          'Ensure proper drainage in your fields',
          'Harvest any mature crops before heavy rain',
          'Apply preventive fungicide spray if crops are in flowering stage',
          'Store harvested produce in a dry place',
        ],
        caution: 'Weather forecasts can change. Check updates regularly and prepare for unexpected conditions.',
        confidence: 'high',
        sources: [
          { title: 'India Meteorological Department (IMD)', url: 'https://mausam.imd.gov.in', freshness: 'Today', type: 'government' },
        ],
        followUpQuestions: ['What crops are currently in your field?', 'What growth stage are your crops at?'],
      });
    } else if (system.includes('mandi') || system.includes('price') || system.includes('market')) {
      mockAnswer = JSON.stringify({
        answer:
          'Current mandi prices for your crop show moderate rates. Prices have been stable over the past week with a slight upward trend. The modal price at your nearest mandi is within the expected range.',
        recommendedActions: [
          'Compare prices across 2-3 nearby mandis before selling',
          'Check if MSP (Minimum Support Price) is available for your crop',
          'Consider timing your sale based on price trends',
          'Ensure your produce meets quality standards for better rates',
        ],
        caution: 'Mandi prices change daily. Always verify current prices before making selling decisions. This information is for reference only.',
        confidence: 'medium',
        sources: [
          { title: 'Agmarknet - Agricultural Marketing Information Network', url: 'https://agmarknet.gov.in', freshness: 'Today', type: 'government' },
        ],
        followUpQuestions: ['Which mandi do you usually sell at?', 'What quantity do you plan to sell?'],
      });
    } else if (system.includes('scheme') || system.includes('government') || system.includes('eligib')) {
      mockAnswer = JSON.stringify({
        answer:
          'There are several government schemes available for farmers in your state. Based on your profile, you may be eligible for PM-KISAN, PM Fasal Bima Yojana, and the Soil Health Card scheme.',
        recommendedActions: [
          'Visit your nearest CSC (Common Service Center) for application',
          'Keep your Aadhaar, land records, and bank passbook ready',
          'Check eligibility on the official scheme portal',
          'Ask about state-specific schemes at your district agriculture office',
        ],
        caution:
          'Eligibility depends on specific criteria. This is general guidance. Please verify your eligibility with official sources before applying. KisanAI does not guarantee scheme approval.',
        confidence: 'medium',
        sources: [
          { title: 'PM-KISAN Official Portal', url: 'https://pmkisan.gov.in', freshness: 'Active scheme', type: 'government' },
          { title: 'Ministry of Agriculture & Farmers Welfare', url: 'https://agricoop.nic.in', type: 'government', freshness: 'Current' },
        ],
        followUpQuestions: ['What is your land holding size?', 'Which state and district are you in?', 'Do you have a Kisan Credit Card?'],
      });
    } else {
      mockAnswer = JSON.stringify({
        answer:
          'I can help you with farming-related questions about crop diseases, weather advisories, mandi prices, and government schemes. Please share more details about what you need help with.',
        recommendedActions: [
          'Upload a photo if you see disease symptoms on your crops',
          'Ask about weather conditions for your area',
          'Check current mandi prices for your crop',
          'Learn about government schemes you may be eligible for',
        ],
        caution: 'KisanAI provides general agricultural guidance. For critical decisions, always consult your local agriculture expert or KVK.',
        confidence: 'high',
        sources: [],
        followUpQuestions: ['What crop are you growing?', 'What is your current concern?', 'Which district are you in?'],
      });
    }

    return mockAnswer;
  }

  async *generateStream(options: GenerateOptions): AsyncIterable<StreamChunk> {
    const full = await this.generate(options);
    const words = full.split(' ');
    for (let i = 0; i < words.length; i++) {
      const chunk = (i === 0 ? '' : ' ') + words[i];
      yield { text: chunk, done: false };
      await new Promise((r) => setTimeout(r, 10));
    }
    yield { text: '', done: true };
  }
}

// ---------------------------------------------------------------------------
// Provider registry & public API
// ---------------------------------------------------------------------------

function detectProviders(): AIProvider[] {
  const providers: AIProvider[] = [];

  const openaiKey = process.env.OPENAI_API_KEY ?? '';
  const openaiBase = process.env.OPENAI_BASE_URL ?? '';
  const openaiModel = process.env.OPENAI_MODEL ?? '';
  const geminiKey = process.env.GEMINI_API_KEY ?? '';
  const anthropicKey = process.env.ANTHROPIC_API_KEY ?? '';
  const workerUrl = process.env.FREE_CLAUDE_WORKER_URL ?? '';

  if (openaiKey) providers.push(new OpenAIProvider(openaiKey, openaiBase || undefined, openaiModel || undefined));
  if (geminiKey) providers.push(new GeminiProvider(geminiKey));
  if (anthropicKey) providers.push(new AnthropicProvider(anthropicKey));
  
  // Integrate the published Cloudflare worker (always active fallback)
  providers.push(new CloudflareWorkerProvider(workerUrl));

  // Mock is always last as fallback
  providers.push(new MockProvider());

  return providers;
}

let providerChain: AIProvider[] | null = null;

export function getProviderChain(): AIProvider[] {
  if (!providerChain) {
    providerChain = detectProviders();
  }
  return providerChain;
}

export function getActiveProvider(): AIProvider {
  const chain = getProviderChain();
  return chain[0];
}

export function isMockMode(): boolean {
  return getActiveProvider().name === 'mock';
}

export async function generateResponse(options: GenerateOptions): Promise<string> {
  const chain = getProviderChain();
  let lastError: Error | null = null;

  for (const provider of chain) {
    if (!provider.isAvailable) continue;
    try {
      return await provider.generate(options);
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      console.warn(`[KisanAI] Provider "${provider.name}" failed, trying next...`, lastError.message);
      continue;
    }
  }

  throw lastError ?? new Error('No AI provider available');
}

export async function* generateResponseStream(
  options: GenerateOptions,
): AsyncIterable<StreamChunk> {
  const chain = getProviderChain();

  for (const provider of chain) {
    if (!provider.isAvailable) continue;
    try {
      yield* provider.generateStream(options);
      return;
    } catch (err) {
      console.warn(
        `[KisanAI] Stream from "${provider.name}" failed, trying next...`,
        err instanceof Error ? err.message : err,
      );
      continue;
    }
  }
}
