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
  const company_images:Array<{src:string;alt:string}> = [
    {
      src:"/images/chantier_0.webp",
      alt: "chantier"
    },
    {
      src:"/images/chantier_1.webp",
      alt: "chantier"
    },
    {
      src:"/images/chantier_2.webp",
      alt: "chantier"
    },
    {
      src:"/images/chantier_3.webp",
      alt: "chantier"
    },
    {
      src:"/images/chantier_4.webp",
      alt: "chantier"
    },
    {
      src:"/images/chantier_5.webp",
      alt: "chantier"
    },
  ]
  return (
    <div>
      <Hero title={t("about")} main_title={t("company_name")} image={"/images/palace.webp"} />
      {/**End hero */}
      <section className="contain vert-space flex flex-col gap-6 sm:gap-10 items-center">
        <p className="text-[clamp(18px,2vw,28px)] leading-[150%] font-medium text-center max-w-[960px]">{t("company_description")}</p>
        <OnViewAnimation animation="popIn" duration={0.75} delay={0.25}>
          <img src="/images/about_67.webp" alt="about 67 design" className='max-w-[960px] w-full h-auto' />
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
    {/* Titre + intro (tu peux adapter les clés i18n) */}
    <div className="w-full max-w-[720px] flex flex-col gap-4 text-center">
      <OnViewAnimation animation="fadeUp" duration={0.75} delay={0.15}>
        <h2 className="text-white">{t("gallery_title")}</h2>
      </OnViewAnimation>
      <OnViewAnimation animation="fadeUp" delay={0.4} duration={0.75}>
        <p>{t("gallery_description", { defaultValue: "Aperçu de nos chantiers, bureaux et maquettes." })}</p>
      </OnViewAnimation>
    </div>

    {/* Grille d'images */}
    <ul
      className="grid w-full gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
    >
      {company_images.slice(0,4).map((img, idx) => (
        <OnViewAnimation
          key={idx}
          animation="popIn"
          duration={0.75}
          delay={0.08 * idx}
        >
          <li>
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/40 ring-1 ring-white/5">
              {/* Variante Next/Image (recommandé) */}
              {/* <Image src={img.src} alt={img.alt} width={800} height={1000} className="w-full h-auto object-cover" /> */}
              <img
                src={img.src}
                alt={img.alt ?? ""}
                loading="lazy"
                className={`w-full h-auto object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] aspect-2/3`}
              />

              {/* Lueur subtile au survol */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </li>
        </OnViewAnimation>
      ))}
    </ul>
  </div>
      </section>
      {/**End team */}
      <CallToAction/>
    </div>
  )
}

export default Page