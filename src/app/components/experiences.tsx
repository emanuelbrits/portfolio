import { getDictionary } from '../lib/i18n';
import ExperiencesCarousel from '../components/ExperienciasCarousel';
import ExperiencesTabs from './ExperiencesTabs';

type ExperiencesProps = {
  lang: string;
};

export default async function Experiences({ lang }: ExperiencesProps) {
  const dict = await getDictionary(lang);

  const experiencias = [
    {
      title: dict.ibgeTitle,
      date: dict.ibgeDate,
      atividades: [
        dict.ibgeAtividade1,
        dict.ibgeAtividade2
      ]
    },
    {
      title: dict.freelaTitle,
      date: dict.freelaDate,
      atividades: [
        dict.freelaAtividade1,
        dict.freelaAtividade2
      ]
    }
  ];

  return (
    <section id="experiences" className="bg-[var(--white)] text-[var(--black)] py-8">
      <div className="mt-12 text-center">
        <div className="flex flex-col items-center gap-8">

          <div className="w-full text-left">
            <h2 className="text-5xl lg:text-6xl xl:text-8xl font-bold">
              {dict.HeaderExperience}
              <span className="text-red-500 !text-5xl lg:!text-6xl xl:!text-8xl !font-bold">.</span>
            </h2>
          </div>

          <div className="from-810:hidden w-full min-h-[400px]">
            <ExperiencesCarousel experiencias={experiencias} />
          </div>

          <div className="hidden from-810:block w-full">
            <ExperiencesTabs experiencias={experiencias} />
          </div>

        </div>
      </div>
    </section>
  );
}