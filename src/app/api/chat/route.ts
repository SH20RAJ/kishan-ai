import { NextRequest } from 'next/server';
import { createResponse, createError, validateRequired, corsHeaders } from '@/lib/api-utils';
import { processQuery } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const missing = validateRequired(body, ['message']);
    if (missing) return createError(missing);

    const result = await processQuery({
      message: String(body.message),
      context: {
        crop: body.crop ? String(body.crop) : undefined,
        location: body.location ? String(body.location) : undefined,
        language: body.language ? String(body.language) : 'en',
      },
    });

    return createResponse(result);
  } catch (error) {
    console.error('[API] /chat error:', error);
    return createError('Failed to process chat request', 500);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
