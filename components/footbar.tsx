import { useTranslations } from 'next-intl'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

function Footbar() {
    const t = useTranslations("Footer");
  return (
    <footer className="bg-neutral-900 py-5">
        <div className='contain flex flex-col gap-4 sm:flex-row sm:justify-between flex-wrap items-start sm:items-center'>
            <div className='flex items-center flex-col sm:flex-row gap-3'>
                <p className="text-white font-medium">{"© 67 Design & Build, 2025"}</p>
                <div className="flex flex-col sm:flex-row">
                    <Link href={"/terms"} className="bg-transparent hover:bg-neutral-800 rounded-md flex items-center h-9 gap-2 px-4 font-medium text-neutral-600 hover:text-neutral-300 transition-all duration-300 ease-out">{t("terms")}</Link>
                    <Link href={"/privacy"} className="bg-transparent hover:bg-neutral-800 rounded-md flex items-center h-9 gap-2 px-4 font-medium text-neutral-600 hover:text-neutral-300 transition-all duration-300 ease-out">{t("privacy")}</Link>
                </div>
            </div>
            <div className="flex gap-2">
                <Link href={ process.env.NEXT_PUBLIC_LINKEDIN ?? "https://www.linkedin.com/company/67-design-build/"} target="_blank"><Button size={"icon"} variant={"ghost"} className="hover:bg-white/20"><img src="/icons/linkedin.svg" alt="IN" className='size-5 object-cover' /></Button></Link>
                <Link href={ process.env.NEXT_PUBLIC_FACEBOOK ?? "https://www.facebook.com/share/1ZkWjPULF4/?mibextid=wwXIfr"} target="_blank"><Button size={"icon"} variant={"ghost"} className="hover:bg-white/20"><img src="/icons/facebook.svg" alt="FB" className='size-5 object-cover' /></Button></Link>
                <Link href={ process.env.NEXT_PUBLIC_TIKTOK ?? "https://www.tiktok.com/@67_design_and_build?_r=1&_t=ZM-91HfEI5Cnq0"} target="_blank"><Button size={"icon"} variant={"ghost"} className="hover:bg-white/20"><img src="/icons/tiktok.svg" alt="TT" className='size-5 object-cover' /></Button></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footbar