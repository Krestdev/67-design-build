import React from 'react'
import OnViewAnimation from '../onViewAnimation'

function ProjectHeader({title, imageURL}:{title:string, imageURL:string}) {
  return (
    <header className="relative overflow-hidden w-full min-h-fit sm:min-h-[40vh] xl:max-h-[460px] py-36 flex flex-col items-center justify-center">
        <h1 className="z-10 text-center text-[clamp(32px,5vw,60px)]">
            <OnViewAnimation animation="fadeUp" duration={1} delay={0.2}>{title}</OnViewAnimation>
        </h1>
        <OnViewAnimation duration={1.5} animation="fadeDown" className="absolute top-0 left-0 w-full h-full">
          <img src={imageURL} alt="hero-image" className="w-full h-full object-cover rounded-none"/>
        </OnViewAnimation>
        <div className='absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/10 via-20% via-white/80 to-white' />
    </header>
  )
}

export default ProjectHeader