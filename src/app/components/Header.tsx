"use client";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  lang: string;
  dictionary: { [key: string]: string };
};

const languages = [
  { code: "en", flag: "https://flagpedia.net/data/flags/icon/36x27/us.webp", label: "English" },
  { code: "pt", flag: "https://flagpedia.net/data/flags/icon/36x27/br.webp", label: "Português" },
  { code: "es", flag: "https://flagpedia.net/data/flags/icon/36x27/es.webp", label: "Español" },
  { code: "fr", flag: "https://flagpedia.net/data/flags/icon/36x27/fr.webp", label: "Français" },
];

export default function Header({ lang, dictionary }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Título fixo à esquerda sem quebra */}
        <Link
          href={`/${lang}`}
          className="text-2xl font-bold text-black whitespace-nowrap"
        >
          {dictionary.HeaderTitle}
        </Link>

        {/* Botão hambúrguer no mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-20 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out transform ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out my-1 ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out transform ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
              }`}
          />
        </button>


        {/* Menu */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white shadow-md lg:shadow-none lg:bg-transparent lg:static lg:flex lg:justify-end lg:items-center lg:space-x-6`}
        >
          {/* Seções */}
          <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">
            <li>
              <a href={`/${lang}#about`} className="text-lg text-gray-700 hover:text-black">
                {dictionary.HeaderAbout}
              </a>
            </li>
            <li>
              <a href={`/${lang}#skills`} className="text-lg text-gray-700 hover:text-black">
                {dictionary.HeaderSkills}
              </a>
            </li>
            <li>
              <a href={`/${lang}#experience`} className="text-lg text-gray-700 hover:text-black">
                {dictionary.HeaderExperience}
              </a>
            </li>
            <li>
              <a href={`/${lang}#education`} className="text-lg text-gray-700 hover:text-black">
                {dictionary.HeaderEducation}
              </a>
            </li>
            <li>
              <a href={`/${lang}#projects`} className="text-lg text-gray-700 hover:text-black">
                {dictionary.HeaderProjects}
              </a>
            </li>
            <li>
              <a href={`/${lang}#contact`} className="text-lg text-gray-700 hover:text-black">
                {dictionary.HeaderContact}
              </a>
            </li>
          </ul>

          {/* Bandeiras */}
          <div className="flex space-x-2 p-4 lg:p-0">
            {languages.map(({ code, flag, label }) => (
              <Link key={code} href={`/${code}`} title={label}>
                <img
                  src={flag}
                  alt={label}
                  className="w-6 h-auto hover:scale-110 transition-transform cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}