import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata(
  params: Promise<{ locale: string }>
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: "SEO" });
  return {
    title: t("contact_title"),
    description: t("contact_description"),
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
