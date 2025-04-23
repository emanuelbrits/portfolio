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
      <section id="about" className="py-16 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{dict.AboutTitle}</h2>
          <p className="text-lg leading-relaxed">
            {dict.AboutDescription}
          </p>
        </div>
      </section>
      <section id="skills" className="py-16 px-6 bg-gray-50 text-gray-800">
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
      <section id="experience" className="py-16 px-6 bg-white text-gray-800">
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
      <section id="education" className="py-16 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{dict.EducationTitle}</h2>
          <div>
            <h3 className="text-2xl font-semibold">{dict.EducationIFPI}</h3>
            <p className="text-gray-600">{dict.EducationCourse}</p>
            <p className="text-gray-600">{dict.EducationYears}</p>
          </div>
        </div>
      </section>
      <section id="projects" className="py-16 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{dict.ProjectsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Exemplo de projeto */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">{dict.ProjectsExampleTitle}</h4>
              <p className="text-sm text-gray-700 mb-4">{dict.ProjectsExampleDescription}</p>
              <a href="#" target="_blank" className="text-blue-500 hover:underline">{dict.ProjectsExampleLink}</a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{dict.ContactTitle}</h2>
          <p className="text-lg mb-4">{dict.ContactDescription}</p>
          <ul className="space-y-2 text-lg">
            <li>Email: <a href="mailto:emanuelbrito.acb@gmail.com" className="text-blue-500">emanuelbrito.acb@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/emanuel-brito-545a65236" target='_blank' className="text-blue-500">/emanuel-brito</a></li>
            <li>GitHub: <a href="https://github.com/emanuelbrits" target='_blank' className="text-blue-500">/emanuelbrits</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
