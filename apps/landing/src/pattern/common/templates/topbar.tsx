"use client";

import { ReactElement } from "react"

import { BrandLogo, Hidden, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@chainkeeping/ui";
import SolutionsNavContent from "../organisms/solutions-nav-content";
import IntegrationsNavContent from "../organisms/integrations-nav-content";
import CustomNavLink from "../molecules/custom-nav-link";

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
        <div className="bg-background fixed inset-0 w-full h-[var(--topbar-height)] flex items-center justify-between pt-[24px] pb-[16px] px-[24px] md:px-[120px] shadow z-[25]">
            <div className='relative md:container flex items-center justify-between'>
                {/* Logo */}
                <BrandLogo />

                {/* Navigation */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigation.map(({ title, content, href }, idx) => (
                            <div key={idx} className="w-ful" >
                                <Hidden isVisible={content ? true : false} >
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="py-2 px-3">{title}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-white md:w-[1100px] lg:w-[1100px] h-fit flex items-center justify-center p-9 z-50">
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
            </div>
        </div>
    )
}

export { Topbar }