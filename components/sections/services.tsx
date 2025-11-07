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
            <Carousel className="w-full overflow-hidden">
                <CarouselContent className="gap-3 -ml-0">
                    {data.map((item)=>(
                        <div key={item.id} className="w-[312px] shrink-0 h-[416px] rounded-[20px] overflow-hidden group">
                            <div className="w-full h-full transition-all duration-500 ease-out relative p-5 flex flex-col gap-3 justify-end">
                                <h4 className="z-10">{t(item.title)}</h4>
                                <p className="z-10 max-h-0 overflow-hidden group-hover:max-h-[100px] transition-all duration-500 ease-in-out text-gray-800">{t(item.description)}</p>
                                <img src={`/images/${item.src}`} alt={item.id} className="absolute top-0 left-0 w-full h-full object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out bg-linear-to-t from-white/80 to-white/0 opacity-100 group-hover:opacity-0"/>
                                <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out bg-linear-to-t from-white/90 to-white/20 opacity-0 group-hover:opacity-100"/>
                            </div>
                        </div>
                    ))}
                </CarouselContent>
            </Carousel>
    </section>
  )
}

export default Services