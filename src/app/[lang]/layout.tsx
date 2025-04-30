// app/[lang]/layout.tsx
import { ReactNode } from 'react';
import { i18n } from '../lib/i18n-config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../globals.css';
import { getDictionary } from '../lib/i18n';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { children, params } = props;
  const { lang } = await params; // <-- Aqui está a chave da correção ⚠️

  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        {/* SEO básico */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio de projetos de desenvolvimento web com Next.js, React e TailwindCSS." />
        <meta name="keywords" content="Desenvolvedor Web, Front-end, Portfólio, React, Next.js, Tailwind" />
        <meta name="author" content="Seu Nome" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para redes sociais */}
        <meta property="og:title" content="Seu Nome | Desenvolvedor Front-end" />
        <meta property="og:description" content="Projetos de alta qualidade em desenvolvimento web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seusite.com" />
        <meta property="og:image" content="https://seusite.com/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seu Nome | Desenvolvedor Front-end" />
        <meta name="twitter:description" content="Veja meus projetos incríveis utilizando React e Next.js." />
        <meta name="twitter:image" content="https://seusite.com/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts otimizado */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>

        {/* Título dinâmico se quiser */}
        <title>Emanuel Brito | Desenvolvedor Front-end</title>
      </head>
      <body>
        <Header lang={lang} dictionary={dictionary} />
        {children}
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}
