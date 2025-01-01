"use client";

import Footer from "@/pattern/common/templates/footer";
import { Topbar } from "@/pattern/common/templates/topbar";
import JoinUsWidget from "@/pattern/home/templates/join-us-widget";
import { cn } from "@chainkeeping/ui";

export default function WhoWeServeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn(
            'relative bg-background w-screen min-h-svh h-fit flex flex-col gap-[12px] font-dmsans transition-all duration-200 ease-in-out',
        )}>
            <Topbar />
            <main className='bg-background w-full h-fit flex flex-col items-center gap-y-[144px] mt-[var(--topbar-height)]'>
                <div className="w-full h-fit flex flex-col gap-y-[88px]">
                    {children}
                </div>
                <JoinUsWidget />
                <Footer />
            </main>
        </div >
    )
}
