import { NextRequest } from 'next/server';
import { createResponse, createError, validateRequired, corsHeaders } from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const missing = validateRequired(body, ['type', 'rating']);
    if (missing) return createError(missing);
    console.log('[Feedback]', { ...body, timestamp: new Date().toISOString() });
    return createResponse({ message: 'Thank you for your feedback!' });
  } catch {
    return createError('Failed to submit feedback', 500);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
