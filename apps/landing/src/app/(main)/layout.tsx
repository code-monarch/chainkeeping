"use client";

import Footer from "@/pattern/common/templates/footer";
import { Topbar } from "@/pattern/common/templates/topbar";
import { cn } from "@chainkeeping/ui";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn(
            'relative bg-background w-screen min-h-svh h-fit flex flex-col gap-[12px] font-dmsans transition-all duration-200 ease-in-out',
        )}>
            <Topbar />
            <main className='bg-background w-full h-fit flex flex-col items-center mt-[var(--topbar-height)]'>
                {children}
            </main>
            <Footer />
        </div >
    )
}
