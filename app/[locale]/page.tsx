import OnViewAnimation from '@/components/onViewAnimation';
import ProjectCard from '@/components/project-card';
import CallToAction from '@/components/sections/call-to-action';
import Partners from '@/components/sections/partners';
import Services from '@/components/sections/services';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Expertise, ProjectPreview } from '@/types/types';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function Page() {
    const t = useTranslations("HomePage");
    const expertises:Array<Expertise> = [
      {
        id: 1,
        title: t("area_services_title"),
        desc: t("area_services_desc")
      },
      {
        id: 3,
        title: t("area_res_title"),
        desc: t("area_res_desc")
      },
      {
        id: 2,
        title: t("area_pro_title"),
        desc: t("area_pro_desc")
      },
    ];
    const top_projects: Array<ProjectPreview> = [
      {
        slug: "saga-africa",
        title: t("project_saga_title"),
        description: t("project_saga_desc"),
        images: [{src:"/images/saga_room.webp", alt:"saga-africa"},{src:"/images/saga_home.webp", alt:"saga interior"},{src:"/images/saga_exterior.webp", alt:"saga external"}],
        year: "2025"
      },
      {
        slug: "le-carino",
        title: t("project_carino_title"),
        description: t("project_carino_desc"),
        images: [{src:"/images/carino_3d_2.webp", alt:"3d le carino"},{src:"/images/carino_3d_1.webp", alt:"le carino"},{src:"/images/carino_3d.webp", alt:"3d du carino"},],
        year: "2025"
      },
    ]; 
  return (
    <main>
      <section className='relative overflow-hidden w-full sm:min-h-[90vh] px-5 py-36 flex flex-col gap-3 sm:gap-5 items-center text-center'>
        <OnViewAnimation className="z-10" animation="fadeUp" delay={0.25}><h1><span className='mono-text'>{t("title")}</span><br />{t("maintitle")}</h1></OnViewAnimation>
        <OnViewAnimation animation="fadeUp" delay={0.4} className="z-10"><p className="max-w-3xl text-[16px] sm:text-[18px] leading-[150%]">{t("subtitle")}</p></OnViewAnimation>
        <OnViewAnimation className='z-10' delay={0.55}>
          <Link href={"/contact"} className='z-10'><Button size={"lg"}>{t("mainbutton")}<ChevronRight size={24}/></Button></Link>
        </OnViewAnimation>
        <OnViewAnimation duration={1.5} animation="popIn" className="absolute top-0 sm:top-1/2 left-1/2 -translate-x-1/2 translate-y-0 sm:-translate-y-1/2 w-full sm:w-[calc(100vw-40px)] h-full sm:h-[calc(100%-40px)]">
          <img src={"/images/hero.webp"} alt="hero" className="w-full h-full object-cover rounded-none sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-[40px]"/>
        </OnViewAnimation>
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
       {/**Services end */}
       <section id="domains" className="bg-neutral-900 text-gray-100">
        <div className="contain vert-space grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-6 sm:gap-10">
            <div className="flex flex-col gap-4">
              <OnViewAnimation animation="fadeUp">
                <h2 className="text-white">{t("expertise_title")}</h2>
              </OnViewAnimation>
              <OnViewAnimation animation="fadeUp" delay={0.25}>
                <p>{t("expertise_desc")}</p>
              </OnViewAnimation>
            </div>
            <div>
              <OnViewAnimation animation="popIn">
                <Accordion type="single" collapsible>
                  {expertises.map(({id, title, desc})=>(
                    <AccordionItem key={id} value={String(id)}>
                      <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px] sm:text-[20px] font-semibold text-white">{title}</AccordionTrigger>
                      <AccordionContent className="text-[14px] leading-[150%] sm:text-[16px] text-gray-100">{desc}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </OnViewAnimation>
            </div>
          </div>
          <OnViewAnimation animation="slideRight" delay={0.4}>
            <img src="/images/interior.webp" alt="image" className="w-full h-auto aspect-video rounded-[20px]" />
          </OnViewAnimation>
        </div>
       </section>
       {/**Expertise end */}
       <section id="projects" className="bg-neutral-900 text-gray-100 vert-space">
        <div className="contain flex flex-col gap-6 sm:gap-10 justify-center">
          <div className="flex flex-col gap-4 items-start sm:items-center">
            <OnViewAnimation animation="fadeUp">
              <h2 className="text-start sm:text-center text-white text-[clamp(24px,4.5vw,60px)]"><span className="mono-text">{t("project_title")}</span><br/>{t("project_title_main")}</h2>
            </OnViewAnimation>
            <OnViewAnimation animation="fadeUp" delay={0.25}>
              <p className="text-start sm:text-center max-w-[744px]">{t("project_desc")}</p>
            </OnViewAnimation>
          </div>
          {top_projects.map((project, id)=>(
            <ProjectCard key={id} RTL={id%2!==0} style="default" {...project}/>
          ))}
        </div>
       </section>
       {/**Projects section End */}
       <CallToAction/>
    </main>
  )
}

export default Page