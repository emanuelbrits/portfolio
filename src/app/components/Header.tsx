import Link from "next/link";
type HeaderProps = {
    lang: string;
    dictionary: { [key: string]: string };
};

export default function Header({ lang, dictionary }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-black">
                    {dictionary.HeaderTitle}
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-lg text-gray-700 hover:text-black">
                            {dictionary.HeaderHome}
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-lg text-gray-700 hover:text-black">
                            {dictionary.HeaderAbout}
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-lg text-gray-700 hover:text-black">
                            {dictionary.HeaderProjects}
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-lg text-gray-700 hover:text-black">
                            {dictionary.HeaderContact}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}