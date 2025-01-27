import { Button } from "@chainkeeping/ui";
import { useState } from "react";
import CloseFilterIcon from "../atoms/close-filter-icon";

const FilterSection = ({
	isFilterOpen,
	toggleFilter,
}: {
	isFilterOpen: boolean;
	toggleFilter: () => void;
}) => {
	return (
		<div
			className={`transition-all  duration-300 ease-in-out bg-white shadow-lg w-80 ${
				isFilterOpen ? "block" : "hidden"
			}`}
		>
			<div className='p-6 flex items-center justify-between w-full'>
				<h2 className='text-xl font-bold '>Filter</h2>
				{/* Add filter options here */}
				<div className='flex gap-8 items-center'>
					<p className='text-[#D82E2E]'>Clear All</p>
					<div onClick={toggleFilter}>
						<CloseFilterIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterSection;
