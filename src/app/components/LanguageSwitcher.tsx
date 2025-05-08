"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

type Language = {
    code: string;
    flag: string;
    label: string;
};

type LanguageSwitcherProps = {
    currentLang: string;
    languages: Language[];
};

const LanguageSwitcher = ({ currentLang, languages }: LanguageSwitcherProps) => {
    const [open, setOpen] = useState(false);
    const current = languages.find((lang) => lang.code === currentLang);

    if (!current) return null;

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-2 border rounded-full bg-[var(--black)] cursor-pointer"
            >
                <img src={current.flag} alt={current.label} className="w-6 h-auto" />
                <span className="uppercase font-medium">{current.code}</span>
                <FaChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <div className="absolute mt-2 right-0 bg-[var(--black)] border shadow-lg rounded-md z-10">
                    {languages
                        .filter(({ code }) => code !== currentLang)
                        .map(({ code, flag, label }) => (
                            <Link
                                key={code}
                                href={`/${code}`}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                <img src={flag} alt={label} className="w-5 h-auto" />
                                <span className="uppercase">{code}</span>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;