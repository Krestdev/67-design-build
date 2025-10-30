import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
    const t = useTranslations("HomePage");
  return (
    <div>{t("title")}</div>
  )
}

export default Page