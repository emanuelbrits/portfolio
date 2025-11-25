import { getDictionary } from '../lib/i18n';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Projects from '../components/projects';
import Experiences from '../components/experiences';
import Skills from '../components/skills';
import Footer from '../components/Footer';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <main className="w-screen overflow-x-hidden px-6 lg:px-7.5 xl:px-14 2xl:px-60">
      <Navbar lang={lang} dictionary={dictionary} />
      <Welcome lang={lang} />
      <Projects lang={lang} />
      <Experiences lang={lang} />
      <Skills lang={lang} />
      <Footer lang={lang} dictionary={dictionary} />
    </main>
  );
}