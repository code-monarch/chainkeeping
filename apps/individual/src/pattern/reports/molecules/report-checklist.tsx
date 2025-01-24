import React from "react";

import { Button } from "@chainkeeping/ui";
import ReportChecklistIcon from "../atoms/report-checklist-icon";
import WarningIcon from "@/pattern/individual/atoms/warning-icon";

const ReportChecklist: React.FC = () => {
	const taxData = [
		{ label: "5", value: "Import new" },
		{ label: "7,679", value: "Add transaction" },
	];

	return (
		<div className='p-4 bg-white rounded-[8px] text-[#202B3C]'>
			<div>
				<div className='flex items-center gap-2 border-b pb-2'>
					<ReportChecklistIcon />
					<h2 className='font-semibold'>Report checklist</h2>
				</div>
				<p className='text-sm text-grey-600 py-4'>
					For accurate computation of your tax reports, we’ll need your entire
					transaction history from your wallets or exchanges.
				</p>
				<div className='flex justify-between'>
					<div className='flex py-2 px-3 min-h-[42px] sm:items-center bg-[#FEF6E1] w-full rounded-lg  gap-2 cursor-pointer'>
						<WarningIcon />
						<p className='text-[#202B3C] font-bold'>
							(5){" "}
							<span className='font-normal'>
								Unresolved transactions, click to resolve{" "}
							</span>
						</p>
					</div>
				</div>
				<ul className='space-y-2'>
					{taxData.map((item, index) => {
						return (
							<li key={index} className='flex justify-between pb-3 pt-1 mt-6'>
								<p className='text-sm font-bold gap-1 flex'>
									<span className='text-[#64748B] font-normal'>
										Calculation Method
									</span>
									({item.label})
								</p>
								<Button
									variant='primaryOutline'
									size='sm'
									className='font-normal'
								>
									{item.value}
								</Button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ReportChecklist;
