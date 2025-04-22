import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-black">
                    Meu Portfólio
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-lg text-gray-700 hover:text-black">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-lg text-gray-700 hover:text-black">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-lg text-gray-700 hover:text-black">
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-lg text-gray-700 hover:text-black">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;