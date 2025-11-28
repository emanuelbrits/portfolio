import { ReactNode } from 'react';
import '../globals.css';

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;

  return (
    <html lang={lang} className='leading-none bg-[var(--white)]'>
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
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Galindo&family=Londrina+Solid:wght@100;300;400;900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Galindo&family=Londrina+Solid:wght@100;300;400;900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Zalando+Sans+SemiExpanded:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"></link>

        <title>Emanuel Brito | Desenvolvedor Fullstack</title>
      </head>
      <body className="w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
