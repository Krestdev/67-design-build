'use client'
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React, { useTransition } from 'react'
import { useLocale } from 'use-intl';

function LanguageSwitch() {
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();
    const router = useRouter();
      const [isPending, startTransition] = useTransition();
      const pathname = usePathname();
      const params = useParams();
    
      function changeLanguage() {
        startTransition(() => {
          router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            {pathname, params},
            {locale: locale === "fr" ? "en" : "fr"}
          );
        });
      }
  return (
    <div className="px-5 h-14 flex items-center gap-2 text-base font-medium" onClick={()=>changeLanguage()}>{t(locale === "fr" ? "en" : "fr")}<span className="text-xs font-normal text-neutral-700 px-2 py-1 rounded border">{t("switch")}</span></div>
  )
}

export default LanguageSwitch