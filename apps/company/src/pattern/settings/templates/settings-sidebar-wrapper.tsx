"use client";

import React, { ReactNode } from "react";

import { cn } from "@chainkeeping/ui";
import Sidebar from "../organisms/sidebar";

const PageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div
			className={cn(
				"relative bg-accent w-full min-h-screen flex transition-all duration-200 ease-in-out"
			)}
		>
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<main
				className='w-full pl-8 flex items-center justify-center ml-[var(--sidebar-width)] mt-[var(--topbar-height)] pt-8 mb-[88px] overflow-x-auto'
			>
				{children}
			</main>
		</div>
	);
};

export default PageWrapper;
