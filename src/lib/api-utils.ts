import { NextResponse } from 'next/server';

export function createResponse<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function createError(message: string, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

export function validateRequired(body: Record<string, unknown>, fields: string[]): string | null {
  for (const field of fields) {
    if (body[field] === undefined || body[field] === null || body[field] === '') {
      return `${field} is required`;
    }
  }
  return null;
}

export function corsHeaders(origin?: string): Record<string, string> {
  const allowed = origin && (
    origin.endsWith('.workers.dev') ||
    origin.endsWith('.kishanai.com') ||
    origin === 'http://localhost:3000'
  ) ? origin : 'https://kishanai.shraj.workers.dev';

  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
