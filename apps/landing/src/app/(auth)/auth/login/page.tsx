"use client";

import React from 'react'
import AccountTypeSelectorTemp from '@/pattern/auth/templates/account-type-selector-temp'
import { usePathname } from 'next/navigation';

const LoginPage = () => {
    const pathname = usePathname();
    
    return (
        <>
            <AccountTypeSelectorTemp pathname={pathname }/>
        </>
    )
}

export default LoginPage