import { getDictionary } from '../lib/i18n';

type SkillsProps = {
    lang: string;
};

export default async function Skills({ lang }: SkillsProps) {
    const dict = await getDictionary(lang);

    return (
        <section id="experiences" className="bg-[var(--white)] text-[var(--black)] py-8">
            <div className="mt-12 text-center">
                <div className="flex flex-col items-center gap-8">

                    <div className="w-full text-left">
                        <h2 className="text-5xl lg:text-6xl xl:text-8xl font-bold">
                            {dict.skills}
                            <span className="text-red-500 !text-5xl lg:!text-6xl xl:!text-8xl !font-bold">.</span>
                        </h2>
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between mt-4 gap-12 text-start w-full'>
                        <div>
                            <h3 className='text-2xl font-bold'>Frontend</h3>
                            <div className='flex flex-col mt-4 gap-2'>
                                <p className='text-lg'>Typescript</p>
                                <p className='text-lg'>ReactJS</p>
                                <p className='text-lg'>AngularJS</p>
                                <p className='text-lg'>NextJS</p>
                                <p className='text-lg'>TailwindCSS</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-2xl font-bold'>Backend</h3>
                            <div className='flex flex-col mt-4 gap-2'>
                                <p className='text-lg'>NodeJS</p>
                                <p className='text-lg'>NestJS</p>
                                <p className='text-lg'>ExpressJS</p>
                                <p className='text-lg'>SQL</p>
                                <p className='text-lg'>Docker</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-2xl font-bold'>{dict.softSkills}</h3>
                            <div className='flex flex-col mt-4 gap-2'>
                                <p className='text-lg'>{dict.comunicacaoEfetiva}</p>
                                <p className='text-lg'>{dict.trabalhoEquipe}</p>
                                <p className='text-lg'>{dict.comprometimento}</p>
                                <p className='text-lg'>{dict.proatividade}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}