import Hero from '@/components/hero';
import ProjectCard from '@/components/project-card';
import CallToAction from '@/components/sections/call-to-action';
import { ProjectPreview } from '@/types/types';
import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
  const t = useTranslations();

  const projects: Array<ProjectPreview> = [
        {
          slug: "saga-africa",
          title: t("HomePage.project_saga_title"),
          description: t("HomePage.project_saga_desc"),
          images: [{src:"/images/saga_room.webp", alt:"saga-africa"},{src:"/images/saga_home.webp", alt:"saga interior"},{src:"/images/saga_exterior.webp", alt:"saga external"}],
          year: "2025"
        },
        {
          slug: "le-carino",
          title: t("HomePage.project_carino_title"),
          description: t("HomePage.project_carino_desc"),
          images: [{src:"/images/carino_3d_2.webp", alt:"3d le carino"},{src:"/images/carino_3d_1.webp", alt:"le carino"},{src:"/images/carino_3d.webp", alt:"3d du carino"},],
          year: "2025"
        },
      ]; 
  return (
    <div>
      <Hero title={t("Projects.header_title")} main_title={t("Projects.header_main")} image={"/images/krest_office.webp"}  />
      <div className='contain max-w-[960px] vert-space flex flex-col items-center gap-[clamp(40px,5.5vw,80px)]'>
        {
          projects.map((item, id)=>(
            <div key={id} id={item.slug} className="w-full"><ProjectCard {...item} style="condensed" /></div>
          ))
        }
      </div>
      <CallToAction/>
    </div>
  )
}

export default Page