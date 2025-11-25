import { getDictionary } from '../../lib/i18n';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { MdOutlineEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

export default async function Contact({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    const dictionary = await getDictionary(lang);

    return (
        <main className="w-screen overflow-x-hidden px-6 lg:px-7.5 xl:px-14 2xl:px-60">
            <Navbar lang={lang} dictionary={dictionary} />
            <div className='flex flex-col lg:flex-row mt-32'>
                <div className='flex flex-col'>
                    <h2 className='text-5xl md:text-6xl xl:text-8xl font-bold mb-4'>{dictionary.contact}<span className='text-red-500 !text-5xl md:!text-6xl xl:!text-8xl !font-bold'>.</span> </h2>
                    <h3 className='text-xl md:text-2xl mb-4'>{dictionary.LookingPartner}</h3>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='flex justify-start items-center gap-6 text-center'>
                            <MdOutlineEmail className='border-1 rounded-full w-11 h-11 p-1.5 text-red-500' /> <p>emanuelbrito.acb@gmail.com</p>
                        </div>
                        <div className='flex justify-start items-center gap-6 text-center'>
                            <BsFillTelephoneFill className='border-1 rounded-full w-11 h-11 p-1.5 text-red-500' /> <p>+55 86 99983-1386</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-end lg:w-full'>
                    <div className='rounded-full border-1 border-red-500'>
                        <div className="relative w-96 h-96 lg:w-112 lg:h-112 rounded-full p-2 border-24 lg:border-60 xl:border-40 border-[var(--white)] overflow-hidden">
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
            <Footer lang={lang} dictionary={dictionary} />
        </main>
    );
}