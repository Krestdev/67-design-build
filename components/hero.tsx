import { HeroProps } from '@/types/types'
import React from 'react'
import OnViewAnimation from './onViewAnimation'

function Hero({title, main_title, image}:HeroProps) {
  return (
    <header className="relative overflow-hidden w-full min-h-fit sm:min-h-[40vh] xl:max-h-[460px] py-36 flex flex-col items-center justify-center">
        <h1 className="z-10 text-center">
            <OnViewAnimation animation="fadeUp" duration={1} className="mono-text">{title}</OnViewAnimation>
            <OnViewAnimation animation="fadeUp" delay={0.25} duration={0.85}>{main_title}</OnViewAnimation>
        </h1>
        <OnViewAnimation duration={1.5} animation="popIn" className="absolute top-0 sm:top-1/2 left-1/2 -translate-x-1/2 translate-y-0 sm:-translate-y-1/2 w-full sm:w-[calc(100vw-40px)] h-full sm:h-[calc(100%-40px)]">
          <img src={image} alt="hero-image" className="w-full h-full object-cover rounded-none sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-[40px]"/>
        </OnViewAnimation>
        <div className='absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/10 via-20% via-white/80 to-white' />
    </header>
  )
}

export default Hero