import { getDictionary } from '../lib/i18n';
import ProjectsGrid from '../components/ProjectsGrid';

type ProjectProps = {
  lang: string;
};

export default async function Projects({ lang }: ProjectProps) {
  const dict = await getDictionary(lang);

  const projects = [
    { id: "fixit", title: "FixIt", img: "/images/redBackground1.jpg", desc: dict.fixitDescription },
    { id: "oikos", title: "Oikos Pousada", img: "/images/redBackground2.jpg", desc: dict.oikosDescription },
    { id: "andrade", title: "Andrade Bardawil", img: "/images/redBackground3.jpg", desc: dict.andradebardawilDescription },
    { id: "r6", title: "Marketplace Control R6", img: "/images/redBackground4.jpg", desc: dict.controlR6Description },
  ];

  return (
    <section id="about" className="bg-[var(--white)] text-[var(--black)] py-16">
      <div className="mt-12 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-left">
            <h2 className="text-5xl lg:text-6xl xl:text-8xl font-bold mb-4">
              {dict.projects}
              <span className="text-red-500 !text-5xl lg:!text-6xl xl:!text-8xl !font-bold">.</span>
            </h2>
          </div>

          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}