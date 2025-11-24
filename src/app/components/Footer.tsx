'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

type FooterProps = {
    lang: string;
    dictionary: { [key: string]: string };
};

export default function Footer({ lang, dictionary }: FooterProps) {

    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href || pathname === `${href}/`;
    };

    return (
        <footer className="bg-[var(--white)] text-[var(--black)] pt-24 pb-6">
            <div className="flex flex-col md:grid md:grid-cols-2 w-full text-center gap-8">
                <div className="flex flex-row justify-center md:justify-start gap-8">
                    <a
                        href={`/${lang}`}
                        className={
                            isActive(`/${lang}`)
                                ? "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out text-red-500 "
                                : "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out bg-[var(--white)] text-gray-600 hover:text-red-500"
                        }
                    >
                        {dictionary.home}
                    </a>

                    <a
                        href={`/${lang}/projects`}
                        className={
                            isActive(`/${lang}/projects`)
                                ? "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out text-red-500 "
                                : "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out bg-[var(--white)] text-gray-600 hover:text-red-500"
                        }
                    >
                        {dictionary.projects}
                    </a>

                    <a
                        href={`/${lang}/about`}
                        className={
                            isActive(`/${lang}/about`)
                                ? "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out text-red-500 "
                                : "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out bg-[var(--white)] text-gray-600 hover:text-red-500"
                        }
                    >
                        {dictionary.about}
                    </a>

                    <a
                        href={`/${lang}/contact`}
                        className={
                            isActive(`/${lang}/contact`)
                                ? "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out text-red-500 "
                                : "md:px-3 md:pl-0 md:py-2 text-lg !font-bold rounded-full transition duration-300 ease-in-out bg-[var(--white)] text-gray-600 hover:text-red-500"
                        }
                    >
                        {dictionary.HeaderContact}
                    </a>
                </div>
                <div className="flex flex-row justify-center md:justify-end gap-8">
                    <a href="https://github.com/emanuelbrits" target="blank" className="text-4xl hover:text-red-500 transition-all duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/emanuel-brito0" target="blank" className="text-4xl hover:text-red-500 transition-all duration-300">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="flex flex-col justify-center md:justify-start gap-4">
                    <h3 className="text-2xl lg:text-3xl xl:text-6xl md:text-start">{dictionary.workTogether}</h3>
                    <div className='flex justify-center md:justify-start gap-4'>
                        <button className='btn cursor-pointer font-bold text-md py-3 px-4 rounded-xl bg-red-500 hover:bg-red-700 text-[var(--white)] transition-all duration-200'>
                            {dictionary.contact}
                        </button>
                        <button className='btn cursor-pointer font-bold text-md py-3 px-4 rounded-xl bg-[var(--white)] border-1 hover:bg-[var(--black)] hover:text-[var(--white)] text-[var(--black)] transition-all duration-200'>
                            {dictionary.projects}
                        </button>
                    </div>
                </div>
                <div className="text-center md:flex md:flex-col md:text-end md:items-end md:justify-end">
                    <p>&copy; {dictionary.FooterRights}</p>
                    <p className="mt-2">
                        {dictionary.FooterThanks}
                    </p>
                </div>
            </div>
        </footer>
    );
}