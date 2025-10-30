import { navigationLink } from '@/types/types'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocaleSwitcher from './localeswitcher'
import Navlink from './navlink'
import { Button } from './ui/button'

function Navbar() {
    const t = useTranslations("Navbar");
    const pages: navigationLink[] = [
        {
            title: "about",
            href: "/about",
        },
        {
            title: "services",
            href: "/services",
        },
        {
            title: "projects",
            href: "/projects",
        },
        {
            title: "contact",
            href: "/contact"
        }
    ]
  return (
    <div className='absolute top-5 left-1/2 -translate-x-1/2 z-20 contain px-5 h-[72px] grid grid-cols-2 gap-5 lg:grid-cols-3 backdrop-blur-sm'>
        <div className='hidden lg:flex items-center'>
            {pages.filter(x=>x.title !== "contact").map(({title, href}, id)=>(
                <Navlink key={id} href={href} title={t(title)}/>
            ))}
        </div>
        <Link href={"/"} className='w-full h-full flex items-center justify-center'><img src={"/logo.svg"} alt='logo' className="h-8 w-auto"/></Link>
        <div className='hidden lg:flex items-center justify-end gap-2'>
            <LocaleSwitcher/>
            <Link href={"/contact"}><Button>{t("contact")}</Button></Link>
        </div>
    </div>
  )
}

export default Navbar