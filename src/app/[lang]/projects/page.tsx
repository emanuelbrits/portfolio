import { getDictionary } from '../../lib/i18n';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { TbExternalLink } from "react-icons/tb";

export default async function Projects({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    const dictionary = await getDictionary(lang);

    const [firstWord, secondWord, thirdWord] = dictionary.Projects.split(" ");

    const projects = [
        { id: "andrade", title: "Andrade Bardawil", img: "/images/redBackground3.jpg", desc: dictionary.andradebardawilDescription },
        { id: "oikos", title: "Oikos Pousada", img: "/images/redBackground2.jpg", desc: dictionary.oikosDescription },
        { id: "r6", title: "Marketplace Control R6", img: "/images/redBackground4.jpg", desc: dictionary.controlR6Description },
        { id: "fixit", title: "FixIt", img: "/images/redBackground1.jpg", desc: dictionary.fixitDescription },
    ];

    return (
        <main className="w-screen overflow-x-hidden px-6 lg:px-7.5 xl:px-14 2xl:px-60">
            <Navbar lang={lang} dictionary={dictionary} />
            <div className='flex flex-col mt-32'>
                <div className='flex flex-col'>
                    <h2 className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4">
                        {firstWord}{" "}
                        <span className="text-red-500 !font-bold" style={{ fontFamily: 'inherit', fontSize: "inherit", lineHeight: "inherit" }}>
                            {secondWord}
                        </span>{" "}
                        {thirdWord}
                        <span className="text-red-500 !text-5xl md:!text-6xl xl:!text-8xl !font-bold">.</span>
                    </h2>
                    {projects.map((project) => (
                        <div key={project.id} className="my-12 flex flex-col lg:gap-8">
                            <div className="relative w-full h-64 md:h-96 lg:h-124 xl:h-148 2xl:h-186 rounded-3xl overflow-hidden">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    quality={100}
                                />
                            </div>
                            <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col gap-4">
                                <a href="" className="group">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-2xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-red-500">
                                            {project.title}
                                        </h3>

                                        <TbExternalLink
                                            className="text-red-500 text-3xl p-1 border-2 border-red-500 rounded-full 
                                            transition-all duration-300 
                                            group-hover:bg-red-500 group-hover:text-white"
                                        />
                                    </div>
                                </a>

                                <p className="text-lg md:text-xl">{project.desc}</p>
                            </div>
                        </div>))}
                </div>
            </div>
            <Footer lang={lang} dictionary={dictionary} />
        </main>
    );
}