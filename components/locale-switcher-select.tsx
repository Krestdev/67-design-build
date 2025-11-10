'use client';
import { TranslateIcon } from "@phosphor-icons/react";

import { usePathname, useRouter } from '@/i18n/navigation';
import { LocaleGroup } from "@/types/types";
import { Locale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { cn } from "@/lib/utils";

type Props = {
  defaultValue: string;
  locales: LocaleGroup[];
  className?: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,locales, className=""
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
        <DropdownMenuTrigger className={cn("flex items-center gap-2 h-9 px-5 cursor-pointer", className)}>
            <TranslateIcon size={24}/>{defaultValue}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {locales.map(({lang, title})=>(
                <DropdownMenuItem key={lang} onClick={()=>changeLanguage(lang)} disabled={isPending} className="cursor-pointer">
                    {title}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  );
}