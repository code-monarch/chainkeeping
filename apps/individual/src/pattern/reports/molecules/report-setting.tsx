import React from "react";
import TaxReportSettingIcon from "../atoms/report-setting-icon";
import { Button } from "@chainkeeping/ui";

const ReportSettings: React.FC = () => {
	const taxData = [
		{ label: "FIFO", value: "change" },
		{ label: "Apr 16, 2023, 4:19PM", value: "Recalculate" },
	];

	return (
		<div className='p-4 bg-white rounded-[8px] text-[#202B3C]'>
			<div>
				<div className='flex items-center gap-2 border-b pb-2'>
					<TaxReportSettingIcon />
					<h2 className='font-semibold'>Report Setting</h2>
				</div>
				<ul className='space-y-3'>
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

export default ReportSettings;
