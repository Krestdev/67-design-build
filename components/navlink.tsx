'use client'
import { cn } from '@/lib/utils';
import { navigationLink } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function Navlink({title, href}:navigationLink) {
    const path = usePathname();
    const isActive = path.endsWith(href);
  return (
    <Link href={href} className={cn("relative px-5 h-9 font-medium text-base flex items-center gap-2")}>
        <span>{title}</span>
        <span className={cn("absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-900 h-0.5 w-0 transition-all duration-150 ease-out", isActive && "w-10")} />
    </Link>
  )
}

export default Navlink