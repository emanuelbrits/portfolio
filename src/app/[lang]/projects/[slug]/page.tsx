import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { getDictionary } from "@/app/lib/i18n";
import ProjectClient from "./ProjectClient";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    const dictionary = await getDictionary(lang);

    return (
        <main className="w-screen overflow-x-hidden px-6 lg:px-7.5 xl:px-14 2xl:px-60">
            <Navbar lang={lang} dictionary={dictionary} />
            <ProjectClient dictionary={dictionary} />
            <Footer lang={lang} dictionary={dictionary} />
        </main>
    );
}

export async function generateStaticParams() {
    const langs = ["pt", "en", "fr", "es"];
    const slugs = ["andrade-bardawil", "oikos-pousada", "r6-marketplace", "fixit"];
    return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}