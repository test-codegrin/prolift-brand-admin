// middleware.js or middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  // Your middleware logic here
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}