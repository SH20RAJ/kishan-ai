import { NextRequest } from 'next/server';
import { createResponse, createError, validateRequired, corsHeaders } from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const missing = validateRequired(body, ['name', 'email', 'type', 'message']);
    if (missing) return createError(missing);
    console.log('[PitchContact]', { ...body, timestamp: new Date().toISOString() });
    return createResponse({ message: 'Thank you for reaching out! We will get back to you within 2 business days.' });
  } catch {
    return createError('Failed to submit contact form', 500);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
