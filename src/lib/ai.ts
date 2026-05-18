/**
 * KishanAI Unified AI client
 * 
 * Orchestrates AI requests with strict automatic fallback logic:
 * Try NVIDIA NIM (NVIDIA credentials) first ➡️ Fallback to your published Cloudflare Worker (free-claude)
 */

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
        const data = await response.json() as any;
        return data.choices?.[0]?.message?.content ?? '';
      }
      console.warn(`⚠️ [KishanAI] NVIDIA NIM returned HTTP ${response.status}. Initiating worker fallback...`);
    } catch (err: any) {
      console.warn('⚠️ [KishanAI] NVIDIA NIM request failed. Initiating worker fallback...', err.message);
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

  const data = await workerRes.json() as any;
  return data.choices?.[0]?.message?.content ?? '';
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
    } catch (err: any) {
      console.warn('⚠️ [KishanAI] NVIDIA NIM stream request failed. Initiating worker fallback...', err.message);
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
