// app/[lang]/page.tsx
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { getDictionary } from '../lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // ⚠️ Desestruturação com await

  const dict = await getDictionary(lang);

  const languages = [
    { code: "en", flag: "https://flagpedia.net/data/flags/icon/36x27/us.webp", label: "English" },
    { code: "pt", flag: "https://flagpedia.net/data/flags/icon/36x27/br.webp", label: "Português" },
    { code: "es", flag: "https://flagpedia.net/data/flags/icon/36x27/es.webp", label: "Español" },
    { code: "fr", flag: "https://flagpedia.net/data/flags/icon/36x27/fr.webp", label: "Français" },
  ];

  return (
    <main className="">
      <section id="about" className="min-h-screen py-8 px-6 bg-[var(--black)] text-[var(--green)]">
        <div className="max-w-8xl mx-auto text-center">
          <div className="flex justify-between items-center w-full mb-20 px-4">
            <div /> {/* Espaço vazio para balancear o layout */}
            <h1 className="text-[24px] text-center flex-1">{dict.HeaderTitle}</h1>
            <div className="flex space-x-2">
              {languages.map(({ code, flag, label }) => (
                <Link key={code} href={`/${code}`} title={label}>
                  <img
                    src={flag}
                    alt={label}
                    className="w-6 h-auto hover:scale-110 transition-transform cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className="w-full md:w-1/2 p-4 text-left">
              <h2 className="text-[90px] mb-4">{dict.AboutTitle}</h2>
              <p className="text-[28px] leading-relaxed">{dict.AboutDescription}</p>
            </div>
            <div className="relative w-full h-[500px] md:h-[700px]">
              <Image
                src="/images/home_image.png"
                alt="Imagem da home"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>
      <section id="skills" className="min-h-screen py-16 px-6 bg-[var(--white)] text-[var(--black)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{dict.SkillsTitle}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            <li>{dict.SkillsLanguages}</li>
            <li>{dict.SkillsFrameworks}</li>
            <li>{dict.SkillsTools}</li>
            <li>{dict.SkillsExtras}</li>
          </ul>
        </div>
      </section>
      <section id="experience" className="min-h-screen py-16 px-6 bg-[var(--black)] text-[var(--green)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{dict.ExperienceTitle}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">{dict.ExperienceIBGE}</h3>
              <p className="text-gray-600 italic">{dict.ExperienceRole}</p>
              <ul className="list-disc list-inside mt-2">
                <li>{dict.ExperienceDetails1}</li>
                <li>{dict.ExperienceDetails2}</li>
                <li>{dict.ExperienceDetails3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="min-h-screen py-16 px-6 bg-[var(--white)] text-[var(--black)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{dict.EducationTitle}</h2>
          <div>
            <h3 className="text-2xl font-semibold">{dict.EducationIFPI}</h3>
            <p className="text-gray-600">{dict.EducationCourse}</p>
            <p className="text-gray-600">{dict.EducationYears}</p>
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-screen py-16 px-6 bg-[var(--black)] text-[var(--green)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{dict.ProjectsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* Exemplo de projeto */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">{dict.ProjectsExampleTitle1}</h4>
              <p className="text-sm text-gray-700 mb-4">{dict.ProjectsExampleDescription1}</p>
              <div className='flex flex-row justify-around'>
                <a href="https://github.com/emanuelbrits/Marketplace_control_R6" target="_blank" className="text-blue-500 hover:underline">{dict.ProjectsExampleLink1}</a>
                <a href="https://marketplace-control-r6.vercel.app" target="_blank" className="text-blue-500 hover:underline">{dict.ProjectLink1}</a>
              </div>
            </div>
            {/* Exemplo de projeto */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">{dict.ProjectsExampleTitle2}</h4>
              <p className="text-sm text-gray-700 mb-4">{dict.ProjectsExampleDescription2}</p>
              <div className='flex flex-row justify-around'>
                <a href="https://github.com/emanuelbrits/FixIT" target="_blank" className="text-blue-500 hover:underline">{dict.ProjectsExampleLink2}</a>
                <a href="https://fix-it-seven.vercel.app" target="_blank" className="text-blue-500 hover:underline">{dict.ProjectLink2}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="min-h-screen py-16 px-6 bg-[var(--white)] text-[var(--black)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{dict.ContactTitle}</h2>
          <p className="text-lg mb-4">{dict.ContactDescription}</p>
          <ul className="space-y-2 text-lg">
            <li>
              <FaEnvelope className="w-5 h-5 text-blue-500 inline mr-2" />
              <a href="mailto:emanuelbrito.acb@gmail.com" className="text-blue-500">emanuelbrito.acb@gmail.com</a>
            </li>
            <li>
              <FaLinkedin className="w-5 h-5 text-blue-500 inline mr-2" />
              <a href="https://www.linkedin.com/in/emanuel-brito-545a65236" target='_blank' className="text-blue-500">/emanuel-brito</a>
            </li>
            <li>
              <FaGithub className="w-5 h-5 text-blue-500 inline mr-2" />
              <a href="https://github.com/emanuelbrits" target='_blank' className="text-blue-500">/emanuelbrits</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
