"use client";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

type Project = {
    title: string;
    description: string;
    repo: string;
    demo: string;
    image: string;
};

type Dict = {
    ProjectsTitle: string;
    ProjectsExampleLink1: string;
    ProjectLink1: string;
};

type Props = {
    dict: Dict;
    projects: Project[];
};

const ProjectsSection = ({ dict, projects }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const distance = touchStartX.current - touchEndX.current;
            const minSwipeDistance = 50;

            if (distance > minSwipeDistance) {
                nextProject(); // Swipe para a esquerda
            } else if (distance < -minSwipeDistance) {
                prevProject(); // Swipe para a direita
            }
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const current = projects[currentIndex];

    return (
        <section
            id="projects"
            className="min-h-screen py-16 px-6 bg-[var(--black)] text-[var(--green)]"
        >
            <div className="max-w-6xl mx-auto relative h-full">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {dict.ProjectsTitle}
                </h2>

                <div
                    className="relative w-full flex items-center h-[70vh]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Botão esquerdo (desktop apenas) */}
                    <button
                        onClick={prevProject}
                        className="hidden md:block absolute -left-20 z-10 text-4xl text-[var(--green)] hover:text-gray-300 transition px-4 cursor-pointer"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Card do projeto */}
                    <div className="w-full h-full flex flex-col gap-8 bg-[var(--white)] p-6 rounded-2xl shadow-md">
                        {/* Imagem + Descrição */}
                        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-6">
                            {/* Imagem */}
                            <div className="w-full md:w-2/3 flex items-center justify-center">
                                <img
                                    src={current.image}
                                    alt={current.title}
                                    className="rounded-xl w-full max-h-[400px] object-cover border"
                                />
                            </div>

                            {/* Texto */}
                            <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center text-[var(--black)] space-y-4">
                                <h4 className="text-3xl md:text-4xl font-semibold">
                                    {current.title}
                                </h4>
                                <p className="text-base md:text-lg">{current.description}</p>
                            </div>
                        </div>

                        {/* Indicadores (bolinhas) */}
                        <div className="flex justify-center gap-2 mt-4">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentIndex
                                            ? "bg-[var(--green)] scale-125"
                                            : "bg-gray-400 opacity-50"
                                        } transition-transform duration-300`}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Ícones */}
                        <div className="w-full flex justify-end items-end gap-6 text-3xl text-[var(--green)]">
                            <a
                                href={current.repo}
                                target="_blank"
                                className="hover:text-[var(--black)] transition"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={current.demo}
                                target="_blank"
                                className="hover:text-[var(--black)] transition"
                            >
                                <FaLink />
                            </a>
                        </div>
                    </div>

                    {/* Botão direito (desktop apenas) */}
                    <button
                        onClick={nextProject}
                        className="hidden md:block absolute -right-20 z-10 text-4xl text-[var(--green)] hover:text-gray-300 transition px-4 cursor-pointer"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
