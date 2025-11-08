import Hero from '@/components/hero'
import OnViewAnimation from '@/components/onViewAnimation'
import CallToAction from '@/components/sections/call-to-action'
import { servicesData } from '@/data/data'
import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
  const t = useTranslations()
  return (
    <div>
      <Hero title={t("Services.services_title")} main_title={t("Services.services_subtitle")} image={"/images/workers.webp"}/>
      <OnViewAnimation animation="popIn" duration={1.5} delay={0.25} className="contain vert-space flex flex-col gap-6 sm:gap-10 items-center">
        <p className="text-[clamp(18px,2vw,28px)] leading-[150%] font-medium text-center max-w-[960px]">{t("Services.services_intro")}</p>
      </OnViewAnimation>
      {servicesData.map((service, id)=>(
        <div key={id} className="contain vert-space grid gap-3 grid-cols-1 md:grid-cols-2">
          <OnViewAnimation animation="slideLeft" duration={0.8} className="flex flex-col gap-4">
            <h2 className="text-[clamp(30px,4.5vw,60px)]">{t(`HomePage.${service.title}`)}</h2>
            <p className="text-[clamp(16px,1.5vw,20px)] leading-[150%] text-neutral-800">{t(`HomePage.${service.description}`)}</p>
          </OnViewAnimation>
          <OnViewAnimation animation="popIn" duration={1} delay={0.25} className='p-5'>
            <img src={`/images/${service.src}`} alt={service.id} className='rounded-[20px] w-full h-auto aspect-video object-cover'/>
          </OnViewAnimation>
        </div>
      ))}
      <CallToAction/>
    </div>
  )
}

export default Page