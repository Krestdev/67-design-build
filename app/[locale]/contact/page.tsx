import OnViewAnimation from '@/components/onViewAnimation';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
  const t = useTranslations("Contact");
  const infos = {
    mail: "contact@67designandbuild.com",
    phone: "+237 677 245 032",
    call: "+237677245032",
    address: "En face Tradex Bonamoussadi, Douala",
    linkedIn: "#",
    facebook: "#"
  }
  return (
    <main className="min-h-dvh py-[clamp(144px,10vw,160px)]">
      <div className="contain grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="px-5 py-8 sm:py-10 flex flex-col gap-6 sm:gap-10">
          <h1>
            <OnViewAnimation animation="fadeUp" duration={1} className="mono-text">{t("contact_title")}</OnViewAnimation>
            <OnViewAnimation animation="fadeUp" duration={1} delay={0.25}>{t("contact_subtitle")}</OnViewAnimation>
          </h1>
          <OnViewAnimation animation="slideLeft" delay={0.15}>
            <p className="text-neutral-800">{t("contact_intro")}</p>
          </OnViewAnimation>
          <div className="flex flex-col gap-4">
            <OnViewAnimation animation="slideLeft" delay={0.2} className="flex flex-col gap-1">
              <p className="text-neutral-600">{t("contact_phone")}</p>
              <a href={`tel:${infos.call}`} className="text-[clamp(16px,2vw,18px)] font-semibold">{infos.phone}</a>
            </OnViewAnimation>
            <OnViewAnimation animation="slideLeft" delay={0.4} className="flex flex-col gap-1">
              <p className="text-neutral-600">{t("contact_email")}</p>
              <a href={`mailto:${infos.mail}`} className="text-[clamp(16px,2vw,18px)] font-semibold">{infos.mail}</a>
            </OnViewAnimation>
            <OnViewAnimation animation="slideLeft" delay={0.6} className="flex flex-col gap-1">
              <p className="text-neutral-600">{t("contact_address")}</p>
              <p className="text-[clamp(16px,2vw,18px)] font-semibold">{infos.address}</p>
            </OnViewAnimation>
            <OnViewAnimation animation="slideLeft" delay={0.8} className="flex flex-col gap-1">
              <p className="text-neutral-600">{t("contact_follow")}</p>
              <div className="text-[clamp(16px,2vw,18px)] font-semibold flex gap-2">
                <a href={infos.linkedIn} target="_blank" className="flex items-start gap-1.5">{"LinkedIn"}<ExternalLink size={16}/></a>
                <a href={infos.facebook} target="_blank" className="flex items-start gap-1.5">{"Facebook"}<ExternalLink size={16}/></a>
              </div>
            </OnViewAnimation>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page