'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSwitcher from './LanguageSwitcher';
import { FaRegMessage } from 'react-icons/fa6';

type NavbarProps = {
    lang: string;
    dictionary: { [key: string]: string };
};

const sections = ['home', 'projects', 'about', 'contact'];

const languages = [
    { code: "en", flag: "https://flagpedia.net/data/flags/icon/36x27/us.webp", label: "English" },
    { code: "pt", flag: "https://flagpedia.net/data/flags/icon/36x27/br.webp", label: "Português" },
    { code: "es", flag: "https://flagpedia.net/data/flags/icon/36x27/es.webp", label: "Español" },
    { code: "fr", flag: "https://flagpedia.net/data/flags/icon/36x27/fr.webp", label: "Français" },
];

export default function Navbar({ lang, dictionary }: NavbarProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(entry => entry.isIntersecting);
                if (visibleSection?.target.id) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { root: null, rootMargin: '0px', threshold: 0.5 }
        );

        const targets = sections
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        targets.forEach(target => observer.observe(target));
        return () => observer.disconnect();
    }, []);

    const getButtonClass = (section: string) =>
        `md:px-3 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out ${activeSection === section
            ? 'text-red-500 font-bold'
            : 'bg-[var(--white)] text-gray-600 hover:text-red-500'
        }`;

    return (
        <header className="w-full top-0 bg-[var(--white)] z-40">
            <nav className="hidden md:flex justify-between items-center gap-4 py-2">
                <div className="flex items-center h-full">
                    <a href={`/${lang}`} className="flex items-center">
                        <span className="flex items-center text-xl !font-bold text-[var(--black)] leading-none">
                            EmanuelBrito
                            <span className="text-red-500 text-2xl md:text-xl !font-extrabold leading-none">.</span>
                        </span>
                    </a>
                </div>
                <div>
                    <a href={`/${lang}`} className={getButtonClass('home')}>
                        {dictionary.home}
                    </a>

                    <a href={`/${lang}#projects`} className={getButtonClass('projects')}>
                        {dictionary.projects}
                    </a>

                    <a href={`/${lang}#contact`} className={getButtonClass('about')}>
                        {dictionary.about}
                    </a>
                </div>

                <div className='flex items-center'>
                    <button className='flex justify-center items-center bg-[var(--black)] rounded-full w-8 h-8'>
                        <a href={`/${lang}#contact`}>
                            <FaRegMessage className='text-[var(--white)]' />
                        </a>
                    </button>
                    <LanguageSwitcher currentLang={lang} languages={languages} />
                </div>
            </nav>

            <div className="flex md:hidden items-center justify-between py-3">
                <a href={`/${lang}`}>
                    <span className="text-xl !font-extrabold text-[var(--black)]">
                        EmanuelBrito
                        <span className="text-red-500 text-4xl !font-extrabold">.</span>
                    </span>
                </a>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-[var(--black)] text-3xl cursor-pointer"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        transition={{
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="overflow-hidden bg-[var(--white)] md:hidden"
                    >
                        <div className="flex flex-col items-start gap-2 pb-4 pt-2 px-4">
                            {sections.map((section) => (
                                <a
                                    key={section}
                                    href={`/${lang}#${section}`}
                                    className={`${getButtonClass(section)} capitalize text-xl w-full text-left`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {dictionary[section] || section}
                                </a>
                            ))}
                            <LanguageSwitcher currentLang={lang} languages={languages} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
