import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import OnViewAnimation from '../onViewAnimation';

function CallToAction() {
    const t = useTranslations("HomePage");
  return (
    <section id="cta" className="bg-neutral-900 text-gray-100 vert-space">
        <div className="contain flex flex-col gap-6 sm:gap-10 items-center">
            <div className="w-full max-w-[960px] flex flex-col items-center gap-4 text-center">
                <OnViewAnimation animation="fadeDown" delay={0.5} className="px-2 py-1 rounded-md border border-[#999999] text-white bg-linear-to-t from-neutral-800 to-neutral-900 flex items-center gap-2 text-[14px]">
                    <span className="size-2 rounded-full bg-[#1DE660] animate-pulse" />
                    {t("available")}
                </OnViewAnimation>
                <h2 className="text-white text-[clamp(30px,5vw,80px)]">
                    <OnViewAnimation animation="fadeUp" delay={0.15} className="mono-text">{t("cta_title")}</OnViewAnimation>
                    <OnViewAnimation animation="fadeUp" delay={0.35}>{t("cta_title_main")}</OnViewAnimation>
                </h2>
                <OnViewAnimation animation="fadeUp" delay={0.45}>
                    <p className="text-gray-300">{t("cta_desc")}</p>
                </OnViewAnimation>
            </div>
            <Link href={"/contact"}><Button variant={"light"} size={"lg"}>{t("contact_us")}</Button></Link>
        </div>
    </section>
  )
}

export default CallToAction