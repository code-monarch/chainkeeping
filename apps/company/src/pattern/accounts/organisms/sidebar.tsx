"use client";
import React from "react";
import { Links } from "./links";
import { Button, cn } from "@chainkeeping/ui";
import SearchInput from "@/pattern/transaction/molecules/search-input";
import AddIconW from "../atoms/add-icon-w";

const SideBar = () => {
	return (
		<div
			className={cn(
				"fixed bg-white w-[var(--sidebar-width)] flex h-full flex-col border-0 border-border max-sm:hidden"
			)}
		>
			<div className='py-4 px-8 mt-16 border-b'>
				<h6 className="text-base text-foreground font-sen font-bold">Accounts</h6>
				<SearchInput className='w-full mt-3' placeholder='Search...' />
			</div>
			<div className='h-full  overflow-y-auto scrollbar-hide justify-between border-0 lg:h-auto lg:space-y-4'>
				<div className='flex flex-col'>
					<Links />
				</div>
			</div>
			<div className='h-50 w-full flex items-end py-4 px-8 shadow-md'>
				<Button variant='secondary' size='md' className='w-full text-md'>
					<AddIconW />
					Add Account
				</Button>
			</div>
		</div>
	);
};

export default SideBar;
