import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { NavigationMenuLink, navigationMenulinkStyle } from '@chainkeeping/ui'
import { INavListItemProps } from '@/pattern/types';

const FAQsCustomNavLink = ({
    href,
    title,
    exact
}: Omit<INavListItemProps, "description" | "icon">) => {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.endsWith(href);

    return (
        <>
            <Link href={href as string} legacyBehavior passHref className='w-fit'>
                <NavigationMenuLink className="bg-transparent flex h-fit min-w-[184px] w-full items-center justify-start text-sm text-gray-500 font-medium rounded-none p-[12px] pt-0 pb-3 transition-colors whitespace-nowrap border-l-[1px] hover:text-gray-600 hover:border-l-[1px] hover:border-l-secondary focus:bg-transparent focus:border-l-[1px] focus:border-l-secondary data-[active]:text-gray-600 data-[active]:border-l-[1px] data-[active]:border-l-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50" active={isActive}>
                    {title}
                </NavigationMenuLink>
            </Link>
        </>
    )
}

export default FAQsCustomNavLink