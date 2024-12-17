"use client";

import { ReactElement } from "react"

import { BrandLogo, NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@chainkeeping/ui";
import SolutionsNavContent from "../organisms/solutions-nav-content";

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
        title: "Solutions",
        content: <SolutionsNavContent />
    }
]

const Topbar = () => {
    return (
        <div className="bg-background fixed w-full h-[var(--topbar-height)] flex items-center justify-between pt-[204px] pb-[16px] px-[24px] md:px-[120px] shadow z-[25]">
            <div className='w-full md:container flex items-center justify-between'>
                {/* Logo */}
                <BrandLogo />

                {/* Navigation */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigation.map(({ title, content, href }, idx) => (
                            <NavigationMenuItem key={idx}>
                                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                                {content}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export { Topbar }