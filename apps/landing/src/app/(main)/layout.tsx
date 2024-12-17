"use client";

import { Topbar } from "@/pattern/common/templates/topbar";
import { cn } from "@chainkeeping/ui";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn(
            'bg-background w-screen h-full flex flex-col gap-[12px] transition-all duration-200 ease-in-out',
        )}>
            <Topbar />
            <div className='bg-background w-full h-fit flex flex-col items-center mt-[var(--topbar-height)]'>
                {children}
            </div>
        </div >
    )
}
