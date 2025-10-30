'use client';
import { TranslateIcon } from "@phosphor-icons/react";

import { usePathname, useRouter } from '@/i18n/navigation';
import { LocaleGroup } from "@/types/types";
import { Locale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

type Props = {
  defaultValue: string;
  locales: LocaleGroup[];
};

export default function LocaleSwitcherSelect({
  defaultValue,locales
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function changeLanguage(value: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: value}
      );
    });
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 h-9 px-5">
            <TranslateIcon size={24}/>{defaultValue}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {locales.map(({lang, title})=>(
                <DropdownMenuItem key={lang} onClick={()=>changeLanguage(lang)} disabled={isPending}>
                    {title}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  );
}