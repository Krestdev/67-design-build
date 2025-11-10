import { navigationLink } from '@/types/types'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocaleSwitcher from './localeswitcher'
import Navlink from './navlink'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import MenuNavLink from './menu-navlink'
import LanguageSwitch from './languageSwitch'

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
    <div className='fixed top-5 left-1/2 -translate-x-1/2 z-20 contain w-[calc(100%-40px)] px-5 h-[72px] grid grid-cols-2 gap-5 lg:grid-cols-3 backdrop-blur-sm rounded-[20px] bg-white/30'>
        <div className='hidden lg:flex items-center'>
            {pages.filter(x=>x.title !== "contact").map(({title, href}, id)=>(
                <Navlink key={id} href={href} title={t(title)}/>
            ))}
        </div>
        <Link href={"/"} className='w-full h-full flex items-center justify-start lg:justify-center'><img src={"/logo.svg"} alt='logo' className="h-8 w-auto"/></Link>
        <div className='hidden lg:flex items-center justify-end gap-2'>
            <LocaleSwitcher/>
            <Link href={"/contact"}><Button>{t("contact")}</Button></Link>
        </div>
        <div className="inline-block lg:hidden justify-self-end self-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={"icon"} variant={"ghost"}>
                        <Menu/>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            {"67 Design & Build"}
                        </SheetTitle>
                        <SheetDescription/>
                        <div className="mt-5 flex flex-col divide-y">
                            <MenuNavLink href="/" title={t("home")}/>
                            {
                                pages.map((page,id)=>(
                                    <MenuNavLink key={id} href={page.href} title={t(page.title)}/>
                                ))
                            }
                            <LanguageSwitch/>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    </div>
  )
}

export default Navbar