import React from 'react'
import OnViewAnimation from '../onViewAnimation'
import { useTranslations } from 'next-intl'
import { Carousel, CarouselContent } from '../ui/carousel';

interface serviceProps {
    title: string;
    description: string;
    src: string;
    id:string;
}

function Services() {
    const t = useTranslations("HomePage");
    const data:serviceProps[] = [
        {
            title: "service_geo_title",
            description: "service_geo_desc",
            src: "technician.webp",
            id: "geotech"
        },
        {
            title: "service_cal_title",
            description: "service_cal_desc",
            src: "report.webp",
            id: "calcul"
        },
        {
            title: "service_cost_title",
            description: "service_cost_desc",
            src: "brainstorm.webp",
            id: "estimation"
        },
        {
            title: "service_work_title",
            description: "service_work_desc",
            src: "building.webp",
            id: "work"
        },
    ];
  return (
    <section id="services" className="contain vert-space flex flex-col gap-6 sm:gap-10 items-center justify-center">
        <OnViewAnimation animation="fadeUp" delay={0.25}>
            <h2 className="text-center">{t("services_title")}</h2>
        </OnViewAnimation>
        <Carousel>
            <CarouselContent className="gap-3">
                {data.map((item)=>(
                    <OnViewAnimation key={item.id} animation="slideLeft" className="w-[312px] h-[416px] rounded-[20px] overflow-hidden">
                        <div className="w-full h-full group transition-all duration-300 ease-out relative p-5 flex flex-col gap-3 justify-end">
                            <h4 className="z-10">{t(item.title)}</h4>
                            <p className="z-10 max-h-0 overflow-hidden group-hover:max-h-fit transition-all duration-300 ease-in-out text-gray-800">{t(item.description)}</p>
                            <img src={`/images/${item.src}`} alt={item.id} className="absolute top-0 left-0 w-full h-full object-cover" />
                            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-white/0 group-hover:from-white/90 group-hover:to-white/20 transition-all duration-300 ease-in-out"/>
                        </div>
                    </OnViewAnimation>
                ))}
            </CarouselContent>
        </Carousel>
    </section>
  )
}

export default Services