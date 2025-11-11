'use client'
import { cn } from '@/lib/utils';
import { Project } from '@/types/types';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import OnViewAnimation from './onViewAnimation';
import { Button } from './ui/button';
import { useFormatter } from 'use-intl';
import { useTranslations } from 'next-intl';

interface Props extends Project {
    RTL?: boolean;
    style?: "default" | "condensed"
}

function ProjectCard({RTL=false, title, description, slug, images, style="default", date}:Props) {
    const format = useFormatter();
    const [first, second, third] = images;
    const t = useTranslations();
    if(style === "default"){
        return (
          <div className="flex flex-col gap-5 sm:gap-8">
            <Link href={`/projects/${slug}`} className={cn("flex justify-between gap-3 flex-wrap")}>
                <OnViewAnimation animation="slideLeft" className="grid gap-1">
                    <h4 className="text-white">{t(title)}</h4>
                    <p className="text-gray-300">{t(description)}</p>
                </OnViewAnimation>
                <Button variant={"ghost"} size={"icon"} className="text-gray-200 hover:text-neutral-900">
                    <ArrowUpRight/>
                </Button>
            </Link>
            <div className={cn("grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-3")}>
                <OnViewAnimation animation="popIn" delay={0.25} className={cn("col-span-1 sm:col-span-2 row-span-2", RTL && "order-2")}>
                    <img src={first.src} alt={first.alt} className={cn("w-full h-auto rounded-[20px] aspect-video object-center")} />
                </OnViewAnimation>
                <OnViewAnimation animation="popIn" delay={0.45} className={cn("hidden sm:inline-block",  RTL && "order-0")}>
                    <img src={second.src} alt={second.alt} className={cn("w-full h-auto rounded-[20px] aspect-video")} />
                </OnViewAnimation>
                <OnViewAnimation animation="popIn" delay={0.65} className={cn("hidden sm:inline-block",  RTL && "order-3")}>
                    <img src={third.src} alt={third.alt} className={cn("hidden sm:inline-block w-full h-auto rounded-[20px] aspect-video", RTL && "order-3")} />
                </OnViewAnimation>
            </div>
          </div>
        )
    }
    return (
        <Link href={`/projects/${slug}`} className="aspect-video w-full h-auto max-w-[960px] relative rounded-[20px] overflow-hidden flex items-end justify-center gap-4">
            <div className="z-10 max-w-[636px] flex flex-col gap-1 py-4 text-center">
                <h4>{t(title)}</h4>
                <p className="text-neutral-600 leading-[150%]">{format.dateTime(date, { month: "long", year: "numeric" })}</p>
            </div>
            <img src={first.src} alt={first.alt} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white via-white/40 to-white-0" />
        </Link>
    )
}

export default ProjectCard