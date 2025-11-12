import { NextResponse } from 'next/server';
import { i18n } from './app/lib/i18n-config';

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt')
  ) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/en') || pathname.startsWith('/pt') || pathname.startsWith('/es') || pathname.startsWith('/fr')) {
    return NextResponse.next();
  }

  const userLang = request.headers.get('Accept-Language')?.split(',')[0] || 'en';

  const validLang = i18n.locales.includes(userLang) ? userLang : 'en';

  const url = new URL(request.url);
  url.pathname = `/${validLang}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
