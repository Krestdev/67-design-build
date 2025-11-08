import Hero from '@/components/hero'
import OnViewAnimation from '@/components/onViewAnimation';
import CallToAction from '@/components/sections/call-to-action';
import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
  const t = useTranslations("About");
  const metrics:Array<{value:string; description:string}> = [
    {
      value: "15+",
      description: t("projects_completed")
    },
    {
      value: "06",
      description: t("years_experience")
    },
    {
      value: "20+",
      description: t("clients_satisfied")
    },
  ];
  return (
    <div>
      <Hero title={t("about")} main_title={t("company_name")} image={"/images/palace.webp"} />
      {/**End hero */}
      <section className="contain vert-space flex flex-col gap-6 sm:gap-10 items-center">
        <p className="text-[clamp(18px,2vw,28px)] leading-[150%] font-medium text-center max-w-[960px]">{t("company_description")}</p>
        <OnViewAnimation animation="popIn" duration={0.75} delay={0.25}>
          <img src="/images/about_67.png" alt="about 67 design" className='max-w-[960px] h-auto' />
        </OnViewAnimation>
        <div className="w-full max-w-[960px] flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 sm:justify-between items-center">
          {
            metrics.map((metric,id)=>(
              <OnViewAnimation animation="fadeDown" duration={0.75} delay={0.2*id} key={id} className='w-full max-w-[216px] px-3 grid gap-1 text-center'>
                <span className="font-bold text-[clamp(30px,4vw,60px)] leading-[120%]">{metric.value}</span>
                <p className="text-neutral-600">{metric.description}</p>
              </OnViewAnimation>
            ))
          }
        </div>
      </section>
      <CallToAction/>
    </div>
  )
}

export default Page