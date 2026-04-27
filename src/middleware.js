import { NextResponse } from 'next/server';

/**
 * Case-insensitive URL middleware
 *
 * Purpose: Issues a permanent 301 redirect from any URL containing uppercase
 * letters in its pathname to its lowercase equivalent. This fixes legacy
 * 404s for URLs indexed by Google with capitalization (e.g. /About, /Services,
 * /Services/Porches) and consolidates SEO signals on a single canonical form.
 *
 * Scope: Excludes Next.js internals, API routes, and static asset extensions
 * via the matcher config below. Query strings are preserved.
 */
export function middleware(request) {
    const { pathname, search } = request.nextUrl;

  // Only act when the path actually has uppercase characters
  if (pathname !== pathname.toLowerCase()) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.toLowerCase();
        // 308 preserves method; for SEO-only GETs 301 is fine. Next.js redirect()
      // defaults to 307/308 unless we pass an options object with permanent: true.
      return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
          /*
           * Match all request paths except:
           * - /_next/static (Next internals)
           * - /_next/image (Next internals)
           * - /api/* (API routes)
           * - /favicon.ico, /robots.txt, /sitemap*.xml (root files)
           * - any path with a file extension (images, fonts, etc.)
           */
      '/((?!_next/static|_next/image|api/|favicon.ico|robots.txt|sitemap.*\\.xml|.*\\..*).*)',
        ],
};
