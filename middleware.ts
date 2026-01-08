import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // You can add more middleware logic here if needed
  // For example, validating API keys, adding headers, etc.

  return response;
}

// Configure middleware to run only on API routes
export const config = {
  matcher: '/api/:path*',
};