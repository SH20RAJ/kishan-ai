import { NextRequest } from 'next/server';
import { createResponse, createError, validateRequired, corsHeaders } from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const missing = validateRequired(body, ['organizationName', 'contactName', 'email', 'phone', 'type', 'state']);
    if (missing) return createError(missing);
    console.log('[PartnerLead]', { ...body, timestamp: new Date().toISOString() });
    return createResponse({ message: 'Thank you for your interest! Our partnerships team will reach out within 48 hours.' });
  } catch {
    return createError('Failed to submit partner inquiry', 500);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
