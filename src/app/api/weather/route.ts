import { NextRequest } from 'next/server';
import { createResponse, corsHeaders } from '@/lib/api-utils';
import { mockWeatherData } from '@/lib/ai/mock-responses';

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get('location') || 'your area';
  const data = { ...mockWeatherData, location, lastUpdated: new Date().toISOString() };
  return createResponse(data);
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
