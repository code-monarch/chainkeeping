import { ReactElement } from "react"

import { BrandLogo, Button, Hidden, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@chainkeeping/ui";
import SolutionsNavContent from "../organisms/solutions-nav-content";
import IntegrationsNavContent from "../organisms/integrations-nav-content";
import CustomNavLink from "../molecules/custom-nav-link";
import ResourcesNavContent from "../organisms/resources-nav-content";
import { CountrySelect } from "../organisms/country-selector";
import Link from "next/link";

interface INavigation {
    title: string;
    href?: string;
    content?: ReactElement;
}

const navigation: INavigation[] = [
    {
        title: "Solutions",
        content: <SolutionsNavContent />
    },
    {
        title: "Integrations",
        content: <IntegrationsNavContent />
    },
    {
        title: "Resources",
        content: <ResourcesNavContent />
    },
    {
        title: "Pricing",
        href: '/',
    },
    {
        title: "About",
        href: '/',
    },
    {
        title: "Contact us",
        href: '/',
    }
]

const Topbar = () => {
    return (
        <div className="bg-background fixed inset-0 w-full h-[var(--topbar-height)] flex items-center justify-between pt-[24px] pb-[16px] px-[24px] md:px-0 shadow z-[25]">
            <div className='relative md:container flex items-center justify-between'>
                {/* Logo */}
                <Link href="/" legacyBehavior>
                    <BrandLogo />
                </Link>

                <div className="flex items-center gap-[27px]">
                    {/* Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigation.map(({ title, content, href }, idx) => (
                                <div key={idx}>
                                    <Hidden isVisible={content ? true : false} >
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="py-2 px-3">{title}</NavigationMenuTrigger>
                                            <NavigationMenuContent asChild>
                                                {content}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </Hidden>

                                    <Hidden isVisible={!content} >
                                        <NavigationMenuItem>
                                            <CustomNavLink href={href as string} title={title} />
                                        </NavigationMenuItem>
                                    </Hidden>
                                </div>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="w-fit font-semibold" >Log In</Button>
                        <Button variant="secondary" size="sm" >Sign up</Button>
                        <CountrySelect />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Topbar }