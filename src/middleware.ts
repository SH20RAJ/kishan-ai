import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiter for Cloudflare Workers
// In production, use Cloudflare Rate Limiting rules
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
  return ip;
}

function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  entry.count++;
  return entry.count > limit;
}

const securityHeaders: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self)',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin page protection
  if (pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');
    const adminPassword = process.env.ADMIN_PASSWORD || 'kisanai-admin-2026';

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { ...securityHeaders, 'WWW-Authenticate': 'Basic realm="KisanAI Admin"' },
      });
    }

    const decoded = atob(authHeader.slice(6));
    const [, password] = decoded.split(':');

    if (password !== adminPassword) {
      return new NextResponse('Invalid credentials', { status: 401, headers: securityHeaders });
    }
  }

  // Rate limiting on API endpoints
  if (pathname.startsWith('/api/')) {
    const key = getRateLimitKey(request);

    // Chat endpoint: 20 requests per minute (AI calls are expensive)
    if (pathname === '/api/chat') {
      if (isRateLimited(`chat:${key}`, 20, 60_000)) {
        return NextResponse.json(
          { success: false, error: 'Rate limit exceeded. Please try again in a minute.' },
          { status: 429 },
        );
      }
    }

    // Disease detection: 10 per minute
    if (pathname === '/api/disease-detect') {
      if (isRateLimited(`disease:${key}`, 10, 60_000)) {
        return NextResponse.json(
          { success: false, error: 'Rate limit exceeded. Please try again in a minute.' },
          { status: 429 },
        );
      }
    }

    // Form submissions: 5 per minute
    if (['/api/waitlist', '/api/partner-lead', '/api/pitch-contact', '/api/feedback'].includes(pathname)) {
      if (isRateLimited(`form:${key}`, 5, 60_000)) {
        return NextResponse.json(
          { success: false, error: 'Too many submissions. Please try again later.' },
          { status: 429 },
        );
      }
    }

    // General API: 60 per minute
    if (isRateLimited(`api:${key}`, 60, 60_000)) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded.' },
        { status: 429 },
      );
    }
  }

  const response = NextResponse.next();
  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
