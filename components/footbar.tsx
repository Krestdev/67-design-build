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
                    <Link href={"#"} className="bg-transparent hover:bg-neutral-800 rounded-md flex items-center h-9 gap-2 px-4 font-medium text-neutral-600 hover:text-neutral-300 transition-all duration-300 ease-out" target="_blank">{t("terms")}</Link>
                    <Link href={"#"} className="bg-transparent hover:bg-neutral-800 rounded-md flex items-center h-9 gap-2 px-4 font-medium text-neutral-600 hover:text-neutral-300 transition-all duration-300 ease-out" target="_blank">{t("privacy")}</Link>
                </div>
            </div>
            <div className="flex gap-2">
                <Link href={"#"}><Button size={"icon"} variant={"ghost"} className="text-white hover:text-neutral-900">IN</Button></Link>
                <Link href={"#"}><Button size={"icon"} variant={"ghost"} className="text-white hover:text-neutral-900">X</Button></Link>
                <Link href={"#"}><Button size={"icon"} variant={"ghost"} className="text-white hover:text-neutral-900">F</Button></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footbar