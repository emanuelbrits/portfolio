"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

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
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const pathname = usePathname();

  const current = languages.find((lang) => lang.code === currentLang);
  if (!current) return null;

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: rect.left, y: rect.bottom + window.scrollY });
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 md:px-3 md:py-2 rounded-full cursor-pointer bg-transparent"
      >
        <img src={current.flag} alt={current.label} className="w-6 h-auto" />
        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open &&
        createPortal(
          <div
            style={{
              position: "absolute",
              left: coords?.x ?? 0,
              top: coords?.y ?? 0,
              zIndex: 99999,
            }}
            className="bg-white shadow-xl rounded-md w-max mt-2"
          >
            {languages
              .filter(({ code }) => code !== currentLang)
              .map(({ code, flag, label }) => (
                <Link
                  key={code}
                  href={`/${code}${pathname.replace(/^\/[a-z]{2}/, "")}`}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <img src={flag} alt={label} className="w-5 h-auto" />
                  <span className="uppercase">{code}</span>
                </Link>
              ))}
          </div>,
          document.body
        )}
    </div>
  );
};

export default LanguageSwitcher;
