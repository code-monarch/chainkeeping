"use client";

import React from 'react'
import AccountTypeSelectorTemp from '@/pattern/auth/templates/account-type-selector-temp'
import { usePathname, useRouter } from 'next/navigation';

const SignUpPage = () => {
    const pathname = usePathname();

    console.log("CURRENT PATHNAME: ", pathname)


    return (
        <>
            <AccountTypeSelectorTemp pathname={pathname} />
        </>
    )
}

export default SignUpPage