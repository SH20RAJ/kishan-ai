import { createResponse, corsHeaders } from '@/lib/api-utils';

export async function GET() {
  return createResponse({
    status: 'ok',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    mode: process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY ? 'live' : 'mock',
  });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
