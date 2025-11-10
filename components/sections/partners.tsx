import { useTranslations } from 'next-intl'
import React from 'react'
import { Marquee } from '../ui/marquee';

function Partners() {
    const t = useTranslations("HomePage");
    const data = [
        {
            src: "cud.png",
            alt: "Logo Communauté Urbaine de Douala",
        },
        {
            src: "pellegrini.png",
            alt: "Logo Pellegrini",
        },
        {
            src: "cotco.jpg",
            alt: "Logo cotco",
        },
        {
            src: "krest.svg",
            alt: "Logo krest holding",
        },
        {
            src: "carino.svg",
            alt: "Logo le Carino Pizzeria",
        },
    ];
  return (
    <div className="contain relative overflow-hidden flex flex-col gap-4 text-center py-7">
        <span className='text-[18px] leading-[150%] font-semibold'>{t("trustedby")}</span>
        <Marquee>
            {data.map(({src, alt})=>(
                <img key={src} src={`/partners/${src}`} alt={alt} className='w-60 h-20 object-contain transition-all duration-500 ease-out grayscale hover:grayscale-0' />
            ))}
        </Marquee>
        <div className='absolute top-0 left-0 w-full h-full bg-linear-to-r from-white via-white/0 to-white'/>
    </div>
  )
}

export default Partners