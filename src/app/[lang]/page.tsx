// app/[lang]/page.tsx
import { FaEnvelope, FaGithub, FaLinkedin, FaJs, FaReact, FaNode, FaGitAlt, FaDocker, FaHtml5, FaCss3, FaAngular, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiPostgresql, SiNextdotjs } from 'react-icons/si';
import { getDictionary } from '../lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ProjectsSection from '../components/ProjectsSection';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  const languages = [
    { code: "en", flag: "https://flagpedia.net/data/flags/icon/36x27/us.webp", label: "English" },
    { code: "pt", flag: "https://flagpedia.net/data/flags/icon/36x27/br.webp", label: "Português" },
    { code: "es", flag: "https://flagpedia.net/data/flags/icon/36x27/es.webp", label: "Español" },
    { code: "fr", flag: "https://flagpedia.net/data/flags/icon/36x27/fr.webp", label: "Français" },
  ];

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-red-500" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Node.js', icon: <FaNode className="text-green-600" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500" /> },
    { name: 'NextJs', icon: <SiNextdotjs className="text-[var(--white)]" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" /> },
  ];

  const projects = [
    {
      title: dict.ProjectsExampleTitle1,
      description: dict.ProjectsExampleDescription1,
      repo: "https://github.com/emanuelbrits/Marketplace_control_R6",
      demo: "https://marketplace-control-r6.vercel.app",
      image: "/images/marketplace.png", // Coloque suas imagens na pasta public ou use links externos
    },
    {
      title: dict.ProjectsExampleTitle2,
      description: dict.ProjectsExampleDescription2,
      repo: "https://github.com/emanuelbrits/FixIT",
      demo: "https://fix-it-seven.vercel.app",
      image: "/images/fixit.png",
    },
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
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-18">
          {/* Lado esquerdo: Experiência e Educação */}
          <div className="flex flex-col justify-around w-full lg:w-1/2 min-h-[70vh] space-y-8">
            {/* Experiência */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-4">{dict.ExperienceTitle}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">{dict.ExperienceIBGE}</h3>
                  <p className="text-gray-600 italic">{dict.ExperienceRole}</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>{dict.ExperienceDetails1}</li>
                    <li>{dict.ExperienceDetails2}</li>
                    <li>{dict.ExperienceDetails3}</li>
                  </ul>
                  <br />
                  <p>{dict.ExperienceDetails4}</p>
                </div>
              </div>
            </div>

            {/* Educação */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-4">{dict.EducationTitle}</h2>
              <div>
                <h3 className="text-2xl font-semibold">{dict.EducationIFPI}</h3>
                <p className="text-gray-600">{dict.EducationCourse}</p>
                <p className="text-gray-600">{dict.EducationYears}</p>
              </div>
            </div>
          </div>

          {/* Lado direito: Skills */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-center mb-8">{dict.SkillsTitle}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-[var(--black)] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <div className="text-md font-medium text-center text-[var(--white)]">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection dict={dict} projects={projects} />

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
