import Link from "next/link";

type HeaderProps = {
  lang: string;
  dictionary: { [key: string]: string };
};

export default function Header({ lang, dictionary }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href={`/${lang}`} className="text-2xl font-bold text-black">
          {dictionary.HeaderTitle}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <a href={`/#`} className="text-lg text-gray-700 hover:text-black">
              {dictionary.HeaderHome}
            </a>
          </li>
          <li>
            <a href={`/#about`} className="text-lg text-gray-700 hover:text-black">
              {dictionary.HeaderAbout}
            </a>
          </li>
          <li>
            <a href={`/#projects`} className="text-lg text-gray-700 hover:text-black">
              {dictionary.HeaderProjects}
            </a>
          </li>
          <li>
            <a href={`/#contact`} className="text-lg text-gray-700 hover:text-black">
              {dictionary.HeaderContact}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
