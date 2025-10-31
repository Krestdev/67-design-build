import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
    const t = useTranslations("HomePage");
  return (
    <main>
      <section className='relative overflow-hidden w-full sm:min-h-[90vh] px-5 py-36 flex flex-col gap-3 sm:gap-5 items-center text-center'>
        <h1 className='z-10'><span className='mono-text'>{t("title")}</span><br />{t("maintitle")}</h1>
        <p className="z-10 max-w-3xl text-[16px] sm:text-[18px] leading-[150%]">{t("subtitle")}</p>
        <Link href={"/contact"} className='z-10'><Button size={"lg"}>{t("mainbutton")}<ChevronRight size={24}/></Button></Link>
        <img src={"/images/hero.webp"} alt="hero" className="absolute top-0 sm:top-5 left-1/2 -translate-x-1/2 rounded-none sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-[40px] w-full sm:w-[calc(100vw-40px)] h-full sm:h-[calc(100%-20px)] object-cover"/>
        <div className='absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/10 via-white/70 to-white' />
      </section>
    </main>
  )
}

export default Page