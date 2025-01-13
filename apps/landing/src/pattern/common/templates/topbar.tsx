import { ReactElement, useState } from "react"

import { BrandLogo, Button, Hidden, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, Sheet, SheetContent, SheetTrigger } from "@chainkeeping/ui";
// import SolutionsNavContent from "../organisms/solutions-nav-content";
// import IntegrationsNavContent from "../organisms/integrations-nav-content";
import CustomNavLink from "../molecules/custom-nav-link";
import ResourcesNavContent from "../organisms/resources-nav-content";
import { CountrySelect } from "../organisms/country-selector";
import Link from "next/link";
import { APP_ROUTES, AUTH_ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";
import MenuIcon from "../atoms/menu-icon";
import { MenuCloseIcon } from "../atoms/menu-close-icon";

export interface INavigation {
    title: string;
    href?: string;
    content?: ReactElement;
}

const navigation: INavigation[] = [
    // {
    //     title: "Solutions",
    //     content: <SolutionsNavContent />
    // },
    {
        title: "Solutions",
        href: APP_ROUTES.solutions
    },
    // {
    //     title: "Integrations",
    //     content: <IntegrationsNavContent />
    // },
    {
        title: "Resources",
        content: <ResourcesNavContent />
    },
    {
        title: "Integrations",
        href: APP_ROUTES.integrations,
    },
    {
        title: "Pricing",
        href: APP_ROUTES.pricing,
    },
    {
        title: "About",
        href: APP_ROUTES.about,
    },
    {
        title: "Contact us",
        href: APP_ROUTES.contact,
    }
]

const Topbar = () => {
    const { push } = useRouter();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-background fixed inset-0 w-full h-[var(--topbar-height)] flex items-center justify-between px-[24px] lg:px-0 shadow z-[25]">
            <div className='w-full h-full relative lg:container flex items-center justify-between'>
                {/* Logo */}
                <Link href={APP_ROUTES.index}>
                    <BrandLogo />
                </Link>

                <div className="hidden h-full lg:flex lg:items-center lg:gap-[27px]">
                    {/* Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList className="h-[var(--topbar-height)]" >
                            {navigation.map(({ title, content, href }, idx) => (
                                <div key={idx} className="h-full">
                                    <Hidden isVisible={content ? true : false} >
                                        <NavigationMenuItem className="h-full">
                                            <NavigationMenuTrigger className="py-2 px-3">{title}</NavigationMenuTrigger>
                                            <NavigationMenuContent asChild>
                                                {content}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </Hidden>

                                    <Hidden isVisible={!content} >
                                        <NavigationMenuItem className="h-full">
                                            <CustomNavLink href={href as string} title={title} />
                                        </NavigationMenuItem>
                                    </Hidden>
                                </div>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={() => push(AUTH_ROUTES.login)} className="w-fit font-semibold" >Log In</Button>
                        <Button variant="secondary" size="sm" onClick={() => push(APP_ROUTES.signup)} >Sign up</Button>
                        <CountrySelect />
                    </div>
                </div>
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="icon" size="icon">
                                <MenuIcon />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom" closeIcon={<MenuCloseIcon />} closeIconClassName="absolute top-[48px] right-[36px] rounded-full" className="bg-primary h-full w-full text-white pt-12 pl-[18px] pr-9">
                            <nav className="flex flex-col gap-4">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                                <Link href="/docs" onClick={() => setIsOpen(false)}>
                                    Documentation
                                </Link>
                                <Link href="/components" onClick={() => setIsOpen(false)}>
                                    Components
                                </Link>
                                <Link href="/about" onClick={() => setIsOpen(false)}>
                                    About
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div >
        </div >
    )
}

export { Topbar }