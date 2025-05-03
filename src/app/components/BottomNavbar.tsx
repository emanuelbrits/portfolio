'use client';

import { useEffect, useState } from 'react';
import { GoHomeFill, GoMail } from 'react-icons/go';
import { FaTools, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

type BottomNavbarProps = {
    lang: string;
    dictionary: { [key: string]: string };
};

const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

export default function BottomNavbar({ lang, dictionary }: BottomNavbarProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(entry => entry.isIntersecting);
                if (visibleSection?.target.id) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // Ajusta a sensibilidade
            }
        );

        const targets = sections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
        targets.forEach(target => observer.observe(target));

        return () => observer.disconnect();
    }, []);

    const getButtonClass = (section: string) =>
        `px-2 py-2 rounded-full shadow-lg items-center transition duration-300 ease-in-out ${activeSection === section ? 'bg-[var(--black)] text-[var(--green)]' : 'bg-[var(--white)] hover:bg-[var(--black)]'
        }`;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <nav className="text-[20px] bg-[var(--green)] border border-[var(--white)] rounded-full shadow-lg px-4 py-1 flex items-center justify-center gap-2 text-[var(--green)]">
                <a href={`/${lang}#about`} className={getButtonClass('about')}>
                    <GoHomeFill />
                </a>
                <a href={`/${lang}#skills`} className={getButtonClass('skills')}>
                    <FaTools />
                </a>
                <a href={`/${lang}#experience`} className={getButtonClass('experience')}>
                    <FaBriefcase />
                </a>
                <a href={`/${lang}#education`} className={getButtonClass('education')}>
                    <FaGraduationCap />
                </a>
                <a href={`/${lang}#projects`} className={getButtonClass('projects')}>
                    <FaCode />
                </a>
                <a href={`/${lang}#contact`} className={getButtonClass('contact')}>
                    <GoMail />
                </a>
            </nav>

        </div>
    );
}
