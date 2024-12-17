"use client";

import { ReactElement } from "react"

import { BrandLogo, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@chainkeeping/ui";
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
        <div className="relative bg-background fixed inset-0 w-full h-[var(--topbar-height)] flex items-center justify-between pt-[24px] pb-[16px] px-[24px] md:px-[120px] shadow z-[25]">
            <div className='w-full md:container flex items-center justify-between'>
                {/* Logo */}
                <BrandLogo />

                {/* Navigation */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigation.map(({ title, content, href }, idx) => (
                            <NavigationMenuItem key={idx}>
                                <NavigationMenuTrigger className="py-2 px-3">{title}</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-red-500 md:w-[400px] lg:w-[500px]">
                                {content}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export { Topbar }