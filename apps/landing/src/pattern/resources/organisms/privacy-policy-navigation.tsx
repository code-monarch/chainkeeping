import React, { FC } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, ScrollBar, ScrollArea } from '@chainkeeping/ui'
import { INavigation } from '@/pattern/common/templates/topbar'
import FAQsCustomNavLink from '../molecules/faqs-nav-link'

const navigation: INavigation[] = [
    {
        title: "Introduction",
        href: "#intro"
    },
    {
        title: "Data collection and uses",
        href: "#data-collection"
    },
    {
        title: "Information we collect",
        href: "#information-we-collect"
    },
    {
        title: "Cookies",
        href: "#cookies"
    },
    {
        title: "Information sharing and disclosure",
        href: "#information-sharing"
    },
    {
        title: "Information retention and deletion",
        href: "#information-retention"
    },
    {
        title: "Choice and transparency",
        href: "#choice-and-transparency"
    },
    {
        title: "Updates to the policy",
        href: "#updates-to-the-policy"
    }
]

const PrivacyPolicyNavigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="appearance-none w-full h-fit flex flex-col items-end !gap-y-0 !space-y-0" >
                <ScrollArea className="h-[500px]">
                    {navigation.map(({ title, href }, idx) => (
                        <div key={idx} className="h-full w-full">
                            <NavigationMenuItem className="h-full w-fit flex items-start gap-x-2">
                                <span className='text-sm text-[hsla(215,23%,40%,1)] font-medium font-dmsans'>{idx + 1}</span>
                                <FAQsCustomNavLink href={href as string} title={title} className='whitespace-pre-wrap border-0 hover:border-0 focus:border-0 hover:text-secondary focus:text-secondary data-[active]:!text-secondary data-[active]:border-0' />
                            </NavigationMenuItem>
                        </div>
                    ))}
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default PrivacyPolicyNavigation