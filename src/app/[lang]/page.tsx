// app/[lang]/page.tsx
import { getDictionary } from '../lib/i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // ⚠️ Desestruturação com await

  const dict = await getDictionary(lang);

  return (
    <main className="mt-24">
      <section className="container mx-auto p-8">
        <h1>{dict.greeting}</h1>
        <p className="mt-4">{dict.introduction}</p>
      </section>
    </main>
  );
}
