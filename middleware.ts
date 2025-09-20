import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip static files and assets
  const isStaticAsset = pathname.match(/\.(png|jpg|jpeg|svg|webp|gif|ico|css|js|json)$/);
  if (isStaticAsset) {
    return;
  }
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), api routes, static files
    '/((?!_next|api|favicon.ico|.*\\.).+)',
  ],
}; 