import { NextRequest } from 'next/server';
import { createResponse, createError, validateRequired, corsHeaders } from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const missing = validateRequired(body, ['name', 'phone', 'state']);
    if (missing) return createError(missing);
    const phone = String(body.phone).replace(/\D/g, '');
    if (phone.length < 10 || phone.length > 13) return createError('Please enter a valid Indian phone number');
    console.log('[Waitlist]', { ...body, timestamp: new Date().toISOString() });
    return createResponse({ message: 'You have been added to the waitlist! We will contact you when KisanAI is available in your area.' });
  } catch {
    return createError('Failed to join waitlist', 500);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
