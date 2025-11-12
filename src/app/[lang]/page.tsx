import { FaEnvelope, FaGithub, FaLinkedin, FaJs, FaReact, FaNode, FaGitAlt, FaDocker, FaHtml5, FaCss3, FaAngular, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiPostgresql, SiNextdotjs } from 'react-icons/si';
import { getDictionary } from '../lib/i18n';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Projects from '../components/projects';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

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
      image: "/images/marketplace.webp",
    },
    {
      title: dict.ProjectsExampleTitle2,
      description: dict.ProjectsExampleDescription2,
      repo: "https://github.com/emanuelbrits/FixIT",
      demo: "https://fix-it-seven.vercel.app",
      image: "/images/fixit.webp",
    },
  ];

  const dictionary = await getDictionary(lang);

  return (
    <main className="w-screen overflow-x-hidden px-6 lg:px-7.5 xl:px-14 2xl:px-30">
      <Navbar lang={lang} dictionary={dictionary} />
      <Welcome lang={lang} dictionary={dictionary} />
      <Projects lang={lang} dictionary={dictionary} />

      {/* <section id="skills" className="py-16 px-6 bg-[var(--white)] text-[var(--black)]">
        <div className="flex flex-col lg:flex-row gap-18">
          <div className="flex flex-col justify-around w-full lg:w-1/2 min-h-[70vh] space-y-8">
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

            <div>
              <h2 className="text-4xl font-bold text-center mb-4">{dict.EducationTitle}</h2>
              <div>
                <h3 className="text-2xl font-semibold">{dict.EducationIFPI}</h3>
                <p className="text-gray-600">{dict.EducationCourse}</p>
                <p className="text-gray-600">{dict.EducationYears}</p>
              </div>
            </div>
          </div>

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

      <section id="contact" className=" py-16 px-6 bg-[var(--white)] text-[var(--black)]">
        <div className="text-center flex flex-col">
          <h2 className="text-4xl font-bold mb-10">{dict.ContactTitle}</h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 flex flex-col gap-6 text-start">
              <h1 className="text-2xl md:text-3xl font-semibold text-[var(--black)] uppercase">{dict.ContactDescription}</h1>
              <h2 className="text-xl flex items-center gap-2 font-medium text-[var(--black)]">
                {dict.ContactGetInTouch} <FaMessage className="w-5 h-5" />
              </h2>

              <div className="flex flex-col gap-4 mt-4">
                <div>
                  <h3 className="uppercase text-3x1 text-[var(--black)]">{dict.Contact}</h3>
                  <a href="mailto:emanuelbrito.acb@gmail.com" className="text-4x1 text-[var(--green)] hover:underline">
                    emanuelbrito.acb@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="uppercase text-3x text-[var(--black)]1">{dict.ContactSocialMedia}</h3>
                  <div className="flex gap-4 mt-1">
                    <a href="https://www.linkedin.com/in/emanuel-brito-545a65236" target="_blank" className="text-[var(--green)]">
                      <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/emanuelbrits" target="_blank" className="text-[var(--green)]">
                      <FaGithub className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <form className="flex flex-col gap-4 text-start">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-medium">{dict.ContactName}</label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-medium">{dict.ContactEmail}</label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-medium">{dict.ContactMessage}</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[var(--green)] text-[var(--white)] px-6 py-2 rounded-lg hover:bg-[var(--black)] hover:text-[var(--green)] transition duration-400 font-medium cursor-pointer"
                >
                  {dict.ContactSend}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer dictionary={dictionary} /> */}
    </main>
  );
}
