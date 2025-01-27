"use client";

import { Topbar } from "@/pattern/common/templates/topbar";
import PageWrapper from "@/pattern/settings/templates/settings-sidebar-wrapper";
import { SidebarProvider } from "@chainkeeping/ui";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='relative bg-accent w-screen min-h-screen h-auto flex flex-col font-dmsans'>
			{/* Topbar */}
			<Topbar />

			{/* Main Content Wrapper */}
			<div className='flex w-full flex-1 overflow-hidden'>
				<SidebarProvider>
					<PageWrapper>{children}</PageWrapper>
				</SidebarProvider>
			</div>
		</div>
	);
}
