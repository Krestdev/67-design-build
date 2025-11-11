import ProjectContent from '@/components/sections/project-content';
import ProjectHeader from '@/components/sections/project-header';
import { works } from '@/data/data';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({params}:{params: Promise<{slug: string}>}):Promise<Metadata>{
    const {slug} = await params;
    const currentProject = works.find(x=>x.slug===slug);
    const t = await getTranslations();
    if(!currentProject){
        return {
        }
    }
    return {
        title : `${t(currentProject.title)} - 67 Design & Build`,
        description: t(currentProject.description),
        openGraph: {
            title: t(currentProject.title),
            description: t(currentProject.description),
            images: [
                {
                    url: currentProject.images[0].src
                }
            ]
        }
    }
}

async function Page({params}:{params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const currentProject = works.find(x=>x.slug===slug);
    const t = await getTranslations();
    if(!currentProject){
        return notFound();
    }
  return (
    <div className="min-h-[calc(100dvh-76px)]">
        <ProjectHeader title={t(currentProject.title)} imageURL={currentProject.images[0].src} />
        <ProjectContent {...currentProject}/>
    </div>
  )
}

export default Page