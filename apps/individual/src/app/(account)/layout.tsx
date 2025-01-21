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
				"relative bg-[#F8F9FA] w-screen min-h-svh h-fit flex flex-col  gap-[12px] font-dmsans transition-all duration-200 ease-in-out"
			)}
		>
			<Topbar />
			<PageWrapper>{children}</PageWrapper>
		</div>
	);
}
