"use client";

import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-accent w-screen min-h-screen flex items-start justify-center pt-16'>
            {children}
        </div>
    )
}