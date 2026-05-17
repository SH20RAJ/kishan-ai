import { NextRequest } from 'next/server';
import { createResponse, corsHeaders } from '@/lib/api-utils';
import { mockMandiPrices } from '@/lib/ai/mock-responses';

export async function GET(request: NextRequest) {
  const commodity = request.nextUrl.searchParams.get('commodity');
  const state = request.nextUrl.searchParams.get('state');
  let prices = [...mockMandiPrices];
  if (commodity) prices = prices.filter(p => p.commodity.toLowerCase().includes(commodity.toLowerCase()));
  if (state) prices = prices.filter(p => p.state.toLowerCase().includes(state.toLowerCase()));
  return createResponse({ prices, lastUpdated: new Date().toISOString(), source: 'Demo data' });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
