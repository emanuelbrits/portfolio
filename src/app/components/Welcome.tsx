import { getDictionary } from '../lib/i18n';
import Image from 'next/image';

type NavbarProps = {
    lang: string;
    dictionary: { [key: string]: string };
};

export default async function Welcome({ lang, dictionary }: NavbarProps) {

    const dict = await getDictionary(lang);

    return (
        <section id="about" className="bg-[var(--white)] text-[var(--black)] pt-16">
            <div className="mt-12 text-center">
                <div className='flex flex-col xl:flex-row items-center lg:items-start xl:items-center gap-8'>
                    <div className="w-full text-left">
                        <p className="text-2xl leading-relaxed">{dict.WelcomeGreeting}</p>
                        <h2
                            className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4"
                            dangerouslySetInnerHTML={{
                                __html: dict.WelcomeFunction.replace(
                                    /Full/i,
                                    '<span class="text-red-500 !text-5xl md:!text-6xl xl:!text-8xl !font-bold" style="font-family: inherit;">Full</span>'
                                ),
                            }}
                        />
                        <p className="text-xl lg:text-2xl leading-relaxed">{dict.WelcomeText}</p>
                        <div className='pt-8 flex gap-4'>
                            <button className='btn cursor-pointer font-bold text-md py-3 px-4 rounded-xl bg-red-500 hover:bg-red-700 text-[var(--white)] transition-all duration-200'>
                                {dict.contact}
                            </button>
                            <button className='btn cursor-pointer font-bold text-md py-3 px-4 rounded-xl bg-[var(--white)] border-1 hover:bg-[var(--black)] hover:text-[var(--white)] text-[var(--black)] transition-all duration-200'>
                                {dict.projects}
                            </button>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-center xl:justify-end  lg:w-full'>
                        <div className='rounded-full border-1 border-red-500'>
                            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[600px] xl:w-[425px] lg:h-[600px] xl:h-[425px] rounded-full p-2 border-24 lg:border-60 xl:border-40 border-[var(--white)] overflow-hidden">
                                <Image
                                    src="/images/emanuel.webp"
                                    alt="Imagem da home"
                                    fill
                                    className="object-cover rounded-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}