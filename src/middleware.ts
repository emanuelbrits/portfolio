// src/middleware.ts
import { NextResponse } from 'next/server';
import { i18n } from './app/lib/i18n-config'; // ou qualquer arquivo que você tenha de configuração de idiomas

export function middleware(request: Request) {
  const { pathname, searchParams } = new URL(request.url);

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt')
  ) {
    return NextResponse.next()
  }

  // Se já houver um idioma na URL, não faça mais nada
  if (pathname.startsWith('/en') || pathname.startsWith('/pt') || pathname.startsWith('/es') || pathname.startsWith('/fr')) {
    return NextResponse.next();
  }

  // Obtenha o idioma preferido do usuário do cabeçalho 'Accept-Language'
  const userLang = request.headers.get('Accept-Language')?.split(',')[0] || 'en'; // 'en' é o padrão

  // Verifique se o idioma é válido
  const validLang = i18n.locales.includes(userLang) ? userLang : 'en';

  // Redireciona o usuário para a URL com o idioma correto
  const url = new URL(request.url);
  url.pathname = `/${validLang}${pathname}`; // Adiciona o idioma à URL
  return NextResponse.redirect(url);
}

// Esse middleware vai ser aplicado em toda a aplicação
export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'], // Ignora rotas específicas
};
