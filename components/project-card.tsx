import { ProjectPreview } from '@/types/types'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props extends ProjectPreview {
    RTL: boolean;
    style: "default" | "condensed"
}

function ProjectCard({RTL=false, title, description, slug, images, style}:Props) {
    if(style === "default"){
        return (
          <div className="flex flex-col gap-5 sm:gap-8">
            <Link href={`/projets#${slug}`} target="_blank" className={cn("flex justify-between gap-3 flex-wrap")}>
                <div className="grid gap-1">
                    <h4 className="text-white">{title}</h4>
                    <p className="text-gray-300">{description}</p>
                </div>
                <Button variant={"ghost"} size={"icon"} className="text-gray-200 hover:text-white">
                    <ArrowUpRight/>
                </Button>
            </Link>
            <div className={cn("flex gap-3", RTL ? "flex-row-reverse" : "flex-row")}>
                <img src={images[0].src} alt={images[0].alt} className="basis-full sm:basis-2/3 h-auto rounded-[20px] aspect-video object-center" />
                <div className="hidden sm:basis-1/3 sm:flex flex-col gap-3">
                    {images.slice(1,3).map((image, id)=>(
                        <img key={id} src={image.src} alt={image.alt} className="w-full h-auto rounded-[20px] aspect-video object-center"/>
                    ))}
                </div>
            </div>
          </div>
        )
    }
    return (
        <Link href={`/projects#${slug}`}></Link>
    )
}

export default ProjectCard