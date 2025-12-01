"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

interface Project {
    title: string;
    description: string;
    img: string;
    projectType: string;
    year: string;
    imgs?: string[];
}

export default function ProjectClient({ dictionary }: { dictionary: { [key: string]: string } }) {
    const { slug } = useParams<{ slug: string }>();

    const projects: Record<string, Project> = {
        "andrade-bardawil": {
            title: "Andrade Bardawil",
            description: dictionary.andradebardawilDescription,
            img: "/images/redBackground3.jpg",
            projectType: dictionary.freelance,
            year: "2025",
            imgs: [
                "/images/andradeBardawil1.jpg",
                "/images/andradeBardawil2.jpg",
                "/images/andradeBardawil3.jpg",
            ],
        },
        "oikos-pousada": {
            title: "Oikos Pousada",
            description: dictionary.oikosDescription,
            img: "/images/redBackground2.jpg",
            projectType: dictionary.freelance,
            year: "2025",
            imgs: ["/images/oikos1.jpg", "/images/oikos2.jpg", "/images/oikos3.jpg"],
        },
        "r6-marketplace": {
            title: "Marketplace Control R6",
            description: dictionary.controlR6Description,
            img: "/images/redBackground4.jpg",
            projectType: dictionary.personalProject,
            year: "2024",
            imgs: ["/images/r6_1.jpg", "/images/r6_3.jpg", "/images/r6_2.jpg"],
        },
        fixit: {
            title: "FixIt",
            description: dictionary.fixitDescription,
            img: "/images/redBackground1.jpg",
            projectType: dictionary.academicProject,
            year: "2024",
            imgs: ["/images/fixit1.jpg", "/images/fixit2.jpg", "/images/fixit3.jpg"],
        },
    };

    const project = projects[slug];

    if (!project) {
        return <div className="text-xl">Projeto não encontrado.</div>;
    }

    return (
        <div className="flex flex-col mt-32">
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4">
                {project.title}
                <span className="text-red-500 !text-5xl md:!text-6xl xl:!text-8xl !font-bold">.</span>
            </h1>

            <div className="relative w-full h-64 md:h-96 lg:h-124 xl:h-148 2xl:h-186 rounded-3xl overflow-hidden">
                <Image src={project.img} alt={project.title} fill className="object-cover object-center" priority quality={100} />
            </div>

            <p className="text-neutral-700 text-lg md:text-xl lg:text-2xl xl:text-3xl my-12 border-l-5 md:border-l-10 pl-3 border-red-500">
                {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-12 mt-12">
                <div className="flex flex-col justify-around border-2 md:col-span-1 border-red-500 h-42 rounded-2xl shadow-2xl">
                    <div className="flex flex-col pl-4 md:py-4">
                        <h2 className="text-md text-neutral-600">{dictionary.projectType}</h2>
                        <h3 className="text-2xl">{project.projectType}</h3>
                    </div>
                    <div className="flex flex-col pl-4 md:pb-4">
                        <h2 className="text-md text-neutral-600">{dictionary.projectYear}</h2>
                        <h3 className="text-2xl">{project.year}</h3>
                    </div>
                </div>

                {project.imgs && (
                    <div className="flex flex-col md:col-span-3 lg:col-span-4 xl:col-span-5 gap-6">
                        {project.imgs.map((imgSrc, index) => (
                            <div key={index} className="relative w-full h-64 lg:h-124 xl:h-148 2xl:h-186 rounded-3xl overflow-hidden">
                                <Image src={imgSrc} alt={project.title} fill className="object-cover object-center" priority quality={100} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}