'use client'
import { Project } from '@/types/types';
import { useTranslations } from 'next-intl';
import { useFormatter } from 'use-intl';
import OnViewAnimation from '../onViewAnimation';

function ProjectContent({ date, team, tags, resume, images}:Project) {
    const t = useTranslations();
    const format = useFormatter();
  return (
    <article className="contain vert-space flex flex-col gap-6 sm:gap-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-3">
                <OnViewAnimation duration={1}><h2>{t("Projects.summary")}</h2></OnViewAnimation>
                <OnViewAnimation duration={1} delay={0.2}><p className="text-neutral-600">{resume ? t(resume) : t("Projects.no-resume")}</p></OnViewAnimation>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <OnViewAnimation duration={0.5} delay={0.2}>
                    <span className="font-medium">{t("Projects.services")}</span>
                    {tags.length === 0 ? t("Projects.no-tag") : tags.map((tag,id)=>(
                        <p key={id} className="text-neutral-600">{t(tag)}</p>
                    ))}
                </OnViewAnimation>
                {team.length > 0 && <OnViewAnimation duration={0.5} delay={0.4}>
                    <span className="font-medium">{t("Projects.team")}</span>
                    {team.map((person,id)=>(
                        <p key={id} className="text-neutral-600">{t(person)}</p>
                    ))}
                </OnViewAnimation>}
                <OnViewAnimation duration={0.5} delay={0.6}>
                    <span className="font-medium">{t("Projects.date")}</span>
                    <p className="text-neutral-600">{format.dateTime(date, { month: "long", year: "numeric" })}</p>
                </OnViewAnimation>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {images.slice(1).map((image,id)=>(
                <OnViewAnimation key={id} className="w-full h-auto aspect-video" animation="slideLeft" duration={0.75} delay={0.25*id}>
                    <img key={id} src={image.src} alt={image.alt} className="w-full h-full object-cover rounded sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-[20px]"/>
                </OnViewAnimation>
            ))}
        </div>
    </article>
  )
}

export default ProjectContent