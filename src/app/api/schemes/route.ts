import { NextRequest } from 'next/server';
import { createResponse, corsHeaders } from '@/lib/api-utils';
import { mockSchemes } from '@/lib/ai/mock-responses';

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category');
  let schemes = [...mockSchemes];
  if (category) schemes = schemes.filter(s => s.category === category);
  return createResponse({ schemes, count: schemes.length });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
