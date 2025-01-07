import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { NavigationMenuLink, navigationMenulinkStyle } from '@chainkeeping/ui'
import { INavListItemProps } from '@/pattern/types';

const CustomNavLink = ({
    href,
    title,
    exact
}: Omit<INavListItemProps, "description" | "icon">) => {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
        <>
            <Link href={href as string} legacyBehavior passHref className='w-fit'>
                <NavigationMenuLink className={navigationMenulinkStyle()} active={isActive}>
                    {title}
                </NavigationMenuLink>
            </Link>
        </>
    )
}

export default CustomNavLink