import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'de'];
const defaultLocale = 'en';

// Regex to match public/static files (e.g., .pdf, .jpg, .png, .css, .js, etc.)
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip requests for static files (e.g., /file.pdf)
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to default locale if no locale is present
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, favicon, and let static files be skipped by the middleware itself
    '/((?!_next|api|favicon.ico).*)',
  ],
};
