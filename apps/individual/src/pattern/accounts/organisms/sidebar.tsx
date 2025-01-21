"use client";
import React from "react";
import clsx from "clsx";
import { Links } from "./links";
import { Button } from "@chainkeeping/ui";
import SearchInput from "@/pattern/transaction/molecules/search-input";

const SideBar = () => {
	return (
		<div
			className={clsx(
				"w-72 bg-white fixed flex h-full flex-col justify-between border-0 border-[#424343] max-sm:hidden"
			)}
		>
			<div className=' py-4 px-8 mt-16 border-b'>
				<p>Accounts</p>
				<SearchInput className='w-full mt-3' placeholder='Search...' />
			</div>
			{/* Scrollable Section */}
			<div className='h-full overflow-y-auto scrollbar-hide justify-between border-0 border-red-700  lg:h-auto lg:space-y-4'>
				<div className='flex flex-col '>
					<Links />
				</div>
			</div>

			{/* Fixed Footer Section */}
			<div className='h-60 py-4 px-8 shadow-[0px_-4px_6px_rgba(0,0,0,0.1)]'>
				<Button variant='secondary' size='md' className='w-full text-md'>
					Add Account
				</Button>
			</div>
		</div>
	);
};

export default SideBar;
