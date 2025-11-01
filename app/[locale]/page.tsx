import OnViewAnimation from '@/components/onViewAnimation';
import Partners from '@/components/sections/partners';
import Services from '@/components/sections/services';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function Page() {
    const t = useTranslations("HomePage");
  return (
    <main>
      <section className='relative overflow-hidden w-full sm:min-h-[90vh] px-5 py-36 flex flex-col gap-3 sm:gap-5 items-center text-center'>
        <OnViewAnimation className="z-10" animation="fadeUp" delay={0.25}><h1><span className='mono-text'>{t("title")}</span><br />{t("maintitle")}</h1></OnViewAnimation>
        <OnViewAnimation animation="fadeUp" delay={0.4} className="z-10"><p className="max-w-3xl text-[16px] sm:text-[18px] leading-[150%]">{t("subtitle")}</p></OnViewAnimation>
        <OnViewAnimation className='z-10' delay={0.55}>
          <Link href={"/contact"} className='z-10'><Button size={"lg"}>{t("mainbutton")}<ChevronRight size={24}/></Button></Link>
        </OnViewAnimation>
        <img src={"/images/hero.webp"} alt="hero" className="absolute top-0 sm:top-1/2 left-1/2 -translate-x-1/2 translate-y-0 sm:-translate-y-1/2 rounded-none sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-[40px] w-full sm:w-[calc(100vw-40px)] h-full sm:h-[calc(100%-40px)] object-cover"/>
        <div className='absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/10 via-white/70 to-white' />
      </section>
       {/**Hero section End */}
       <Partners/>
       {/**About brief */}
       <section id="about" className="vert-space flex flex-col items-center justify-center gap-6 sm:gap-10">
        <OnViewAnimation animation="popIn" className="w-full sm:w-[calc(100%-40px)] max-w-[1400px] h-auto aspect-21/5">
          <img src="/images/palace.webp" alt="about us" className='w-full h-full object-cover rounded-none sm:rounded-[20px]' />
        </OnViewAnimation>
        <OnViewAnimation animation="fadeUp" delay={0.25} className="max-w-[960px] flex flex-col gap-5 text-center">
          <h2>{t("about_title")}</h2>
          <p>{t("about_content")}</p>
        </OnViewAnimation>
       </section>
       {/**About section End */}
       <Services/>
    </main>
  )
}

export default Page