'use client'
import { cn } from '@/lib/utils';
import { navigationLink } from '@/types/types'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function MenuNavLink({title, href}:navigationLink) {
    const path = usePathname();
    const isActive = path.endsWith(href);
  return (
    <Link href={href} className={cn("px-5 h-14 font-medium text-base flex items-center gap-2", isActive && "bg-neutral-200")}>
        <span>{title}</span>
    </Link>
  )
}

export default MenuNavLink