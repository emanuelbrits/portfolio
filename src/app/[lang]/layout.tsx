import { ReactNode } from 'react';
import { i18n } from '../lib/i18n-config';
import '../globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { children, params } = props;
  const { lang } = await params;

  return (
    <html lang={lang} className='leading-none'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio de projetos de desenvolvimento web com Next.js, React e TailwindCSS." />
        <meta name="keywords" content="Desenvolvedor Fullstack, Web, Front-end, Portfólio, React, Next.js, Tailwind" />
        <meta name="author" content="Emanuel Brito" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Emanuel Brito | Desenvolvedor Fullstack" />
        <meta property="og:description" content="Projetos de alta qualidade em desenvolvimento web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seusite.com" />
        <meta property="og:image" content="https://seusite.com/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emanuel Brito | Desenvolvedor Fullstack" />
        <meta name="twitter:description" content="Veja meus projetos incríveis utilizando React e Next.js." />
        <meta name="twitter:image" content="https://seusite.com/og-image.png" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>

        <title>Emanuel Brito | Desenvolvedor Fullstack</title>
      </head>
      <body className="w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
