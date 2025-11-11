import Hero from '@/components/hero';
import ProjectCard from '@/components/project-card';
import CallToAction from '@/components/sections/call-to-action';
import { works } from '@/data/data';
import { useTranslations } from 'next-intl';

function Page() {
  const t = useTranslations(); 
  return (
    <div>
      <Hero title={t("Projects.header_title")} main_title={t("Projects.header_main")} image={"/images/krest_office.webp"}  />
      <div className='contain max-w-[960px] vert-space flex flex-col items-center gap-[clamp(40px,5.5vw,80px)]'>
        {
          works.map((item, id)=>(
            <div key={id} id={item.slug} className="w-full"><ProjectCard {...item} style="condensed" /></div>
          ))
        }
      </div>
      <CallToAction/>
    </div>
  )
}

export default Page