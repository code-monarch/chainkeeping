"use client";

import React from 'react'
import { Button } from '@chainkeeping/ui'

const ComponentsPage = () => {
    return (
        <div className='w-full min-h-screen h-fit flex flex-col items-center justify-center py-[200px]'>
            <div className='w-[200px] h-full flex flex-col justify-between'>
                <Button size="xs">Xtra Small button</Button>
                <Button size="sm">Small button</Button>
                <Button size="md">Medium sized button</Button>
                <Button size="lg" disabled>Large button</Button>
                <Button variant="default">Default Variant</Button>
                <Button variant="secondary" disabled>Secondary Variant</Button>
                <Button variant="link">Link Variant</Button>
                <Button variant="outline">Outline Variant</Button>
                <Button variant="ghost">Outline Variant</Button>
            </div>
        </div>
    )
}

export default ComponentsPage