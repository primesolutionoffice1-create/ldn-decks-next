import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  // Check if the hostname is 'ldndecks.com' (non-www)
  if (hostname === 'ldndecks.com') {
    url.hostname = 'www.ldndecks.com';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Only run middleware on pages, not on api, static files, etc.
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
