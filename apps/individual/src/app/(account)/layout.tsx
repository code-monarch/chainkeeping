"use client";

import PageWrapper from "@/pattern/accounts/templates/account-sidebar-wrapper";
import { Topbar } from "@/pattern/common/templates/topbar";
import { cn } from "@chainkeeping/ui";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className={cn(
				"relative bg-[#F8F9FA] w-screen min-h-screen h-auto flex flex-col font-dmsans"
			)}
		>
			{/* Topbar */}
			<Topbar />

			{/* Main Content Wrapper */}
			<div className='flex w-full flex-1 overflow-hidden'>
				{/* Sidebar is part of PageWrapper */}
				<PageWrapper>{children}</PageWrapper>
			</div>
		</div>
	);
}
