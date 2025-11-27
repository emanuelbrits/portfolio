import { getDictionary } from '../../lib/i18n';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GlobeComponent from '@/app/components/GlobeComponent';
import { MdOutlineStarBorder } from 'react-icons/md';
import AboutExperienceSection from '@/app/components/AboutExperienceSection';

export default async function About({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    const dictionary = await getDictionary(lang);

    const itemsFrontend = [
        "Typescript",
        "ReactJS",
        "AngularJS",
        "NextJS",
        "TailwindCSS",
        "Typescript",
        "ReactJS",
        "AngularJS",
        "NextJS",
        "TailwindCSS"
    ];

    const itemsBackend = [
        "NodeJS",
        "NestJS",
        "ExpressJS",
        "SQL",
        "Docker",
        "NodeJS",
        "NestJS",
        "ExpressJS",
        "SQL",
        "Docker"
    ];

    const itemsSoftSkills = [
        `${dictionary.comunicacaoEfetiva}`,
        `${dictionary.trabalhoEquipe}`,
        `${dictionary.comprometimento}`,
        `${dictionary.proatividade}`,
        `${dictionary.comunicacaoEfetiva}`,
        `${dictionary.trabalhoEquipe}`,
        `${dictionary.comprometimento}`,
        `${dictionary.proatividade}`
    ];

    return (
        <main className="w-screen overflow-x-hidden px-6 lg:px-7.5 xl:px-14 2xl:px-60">
            <Navbar lang={lang} dictionary={dictionary} />
            <div className='flex flex-col mt-32'>
                <div className='flex flex-col'>
                    <h2 className='text-5xl md:text-6xl xl:text-8xl font-bold mb-4'>{dictionary.aboutMe}<span className='text-red-500 !text-5xl md:!text-6xl xl:!text-8xl !font-bold'>.</span></h2>
                    <h3 className='text-lg md:text-xl lg:text-2xl xl:text-3xl my-4 border-l-5 md:border-l-10 pl-3 border-red-500'>{dictionary.aboutDescription}</h3>
                </div>
                <div className='flex flex-col md:flex-row w-full mt-12'>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 md:pr-2'>
                        <h4 className='text-2xl md:text-3xl xl:text-5xl font-bold'>{dictionary.myStack}<span className='text-red-500 !text-2xl md:!text-3xl xl:!text-5xl !font-bold'>.</span></h4>
                        <div className='flex items-center h-64 md:h-72 bg-neutral-400 rounded-3xl mt-4 shadow-4xl'>
                            <div className="flex flex-col relative overflow-hidden w-full gap-4 md:gap-6">
                                <div className="marquee flex gap-6 items-center">
                                    {itemsFrontend.map((item, i) => (
                                        <div key={i} className="flex items-center gap-6">
                                            <span className="px-4 py-2 bg-black text-white rounded-xl flex items-center gap-2">
                                                {item}
                                            </span>
                                            <MdOutlineStarBorder className='text-red-500 text-center text-3xl' />
                                        </div>
                                    ))}
                                </div>

                                <div className="marquee-reverse flex gap-6 items-center mt-4">
                                    {itemsBackend.map((item, i) => (
                                        <div key={i} className="flex items-center gap-6">
                                            <span className="px-4 py-2 bg-black text-white rounded-xl flex items-center gap-2">
                                                {item}
                                            </span>
                                            <MdOutlineStarBorder className='text-red-500 text-center text-3xl' />
                                        </div>
                                    ))}
                                </div>

                                <div className="marquee flex gap-6 items-center mt-4">
                                    {itemsSoftSkills.map((item, i) => (
                                        <div key={i} className="flex items-center gap-6">
                                            <span className="px-4 py-2 bg-black text-white rounded-xl flex items-center gap-2">
                                                {item}
                                            </span>
                                            <MdOutlineStarBorder className='text-red-500 text-center text-3xl' />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-2/3 mt-12 md:mt-0 md:pl-2'>
                        <h4 className='text-2xl md:text-3xl xl:text-5xl font-bold mb-4'>{dictionary.whereIAm}<span className='text-red-500 !text-2xl md:!text-3xl xl:!text-5xl !font-bold'>.</span></h4>
                        <GlobeComponent />
                    </div>
                </div>
                <AboutExperienceSection dictionary={dictionary} />
            </div>
            <Footer lang={lang} dictionary={dictionary} />
        </main>
    );
}