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

  const values:Array<{title:string; description:string}> = [
    {
      title: t("study"),
      description: t("study_description")
    },
    {
      title: t("plan"),
      description: t("plan_description")
    },
    {
      title: t("build"),
      description: t("build_description")
    },
    {
      title: t("maintain"),
      description: t("maintain_description")
    },
  ];
  const team_members:Array<{name:string; role:string;image:string}> = [
    {
        name: "John Doe",
        role: "General Manager",
        image: "/images/photo.webp"
    },
    {
        name: "John Doe",
        role: "General Manager",
        image: "/images/photo.webp"
    },
    {
        name: "John Doe",
        role: "General Manager",
        image: "/images/photo.webp"
    },
    {
        name: "John Doe",
        role: "General Manager",
        image: "/images/photo.webp"
    },
]
  return (
    <div>
      <Hero title={t("about")} main_title={t("company_name")} image={"/images/palace.webp"} />
      {/**End hero */}
      <section className="contain vert-space flex flex-col gap-6 sm:gap-10 items-center">
        <p className="text-[clamp(18px,2vw,28px)] leading-[150%] font-medium text-center max-w-[960px]">{t("company_description")}</p>
        <OnViewAnimation animation="popIn" duration={0.75} delay={0.25}>
          <img src="/images/about_67.png" alt="about 67 design" className='max-w-[960px] w-full h-auto' />
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
      <section className="contain vert-space grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4">
        <OnViewAnimation animation="slideLeft" duration={0.75} delay={0.25} className='flex flex-col gap-2 sm:gap-4'>
          <h2>{t("our_approach")}</h2>
          <p>{t("approach_description")}</p>
        </OnViewAnimation>
        <div className="col-span-1 lg:col-span-2 grid gap-4 grid-cols-1 sm:grid-cols-2">
          {values.map((item, id)=>(
            <OnViewAnimation animation="slideRight" duration={0.75} delay={0.2*id} key={id} className="grid gap-1 px-3 py-4 bg-linear-to-t from-white via-[#f2f2f2] to-[#f9f9f9] rounded-lg">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </OnViewAnimation>
          ))}
        </div>
      </section>
      {/**End Values */}
      <section className="bg-neutral-900 text-gray-300">
        <div className="contain vert-space flex flex-col gap-6 sm:gap-10 items-center">
          <div className="w-full max-w-[636px] flex flex-col gap-4 text-center">
            <OnViewAnimation animation="fadeUp" duration={0.75} delay={0.15}>
              <h2 className="text-white">{t("our_team")}</h2>
            </OnViewAnimation>
            <OnViewAnimation animation="fadeUp" delay={0.4} duration={0.75}>
              <p>{t("team_description")}</p>
            </OnViewAnimation>
          </div>
          <div className="flex flex-wrap gap-3 items-start justify-center">
            {team_members.map((element, id)=>(
              <OnViewAnimation animation="popIn" duration={0.75} delay={0.2*id} key={id} className="w-full max-w-[204px] flex flex-col">
                <img src={element.image} alt={element.name} className='rounded-t-[20px] w-full h-auto aspect-square object-cover' />
                <div className="px-2 py-3">
                  <span className="text-white font-semibold text-[clamp(16px,1.5vw,18px)] leading-[120%] -tracking-[2%]">{element.name}</span>
                  <p className="text-neutral-300">{element.role}</p>
                </div>
              </OnViewAnimation>
            ))}
          </div>
        </div>
      </section>
      {/**End team */}
      <CallToAction/>
    </div>
  )
}

export default Page