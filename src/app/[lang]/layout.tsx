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
      <body>
        <Header lang={lang} dictionary={dictionary} />
        {children}
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}
