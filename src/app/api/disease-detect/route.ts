import { NextRequest } from 'next/server';
import { createResponse, createError, validateRequired, corsHeaders } from '@/lib/api-utils';
import { mockDiseaseResult } from '@/lib/ai/mock-responses';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const missing = validateRequired(body, ['crop']);
    if (missing) return createError(missing);

    const crop = String(body.crop);
    const result = {
      ...mockDiseaseResult,
      possibleIssue: crop === 'Tomato' ? 'Early Blight (Alternaria solani)' :
                     crop === 'Rice' ? 'Bacterial Leaf Blight' :
                     crop === 'Cotton' ? 'Boll Rot' :
                     crop === 'Potato' ? 'Late Blight (Phytophthora infestans)' :
                     `Possible ${crop} disease`,
    };

    return createResponse(result);
  } catch (error) {
    console.error('[API] /disease-detect error:', error);
    return createError('Failed to process disease detection', 500);
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
