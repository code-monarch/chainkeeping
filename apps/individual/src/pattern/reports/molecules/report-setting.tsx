import React from "react";
import TaxReportSettingIcon from "../atoms/report-setting-icon";

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
					<h2 className='font-medium'>Report Setting</h2>
				</div>
				<ul className='space-y-3'>
					{taxData.map((item, index) => {
						// Split the value into integer and decimal parts
						const [integerPart, decimalPart] = item.value.split(".");
						return (
							<li
								key={index}
								className='flex justify-between border-b pb-3 pt-1 mt-6'
							>
								<span className='text-sm text-[#4F627D]'>{item.label}</span>
								<span className='font-bold text-sm'>
									<span className='text-[#94A3B8] pr-1 font-normal'>NGN</span>
									<span>{integerPart}.</span>
									<span className='text-[#94A3B8] text-[10px] font-normal'>
										{decimalPart}
									</span>
								</span>
							</li>
						);
					})}
				</ul>
				<p className='text-xs mt-6'>
					<span className='text-[#D82E2E]'>**</span> This is a high-level
					summary of your tax report. Download your tax report to see more
					detailed information.
				</p>
			</div>
		</div>
	);
};

export default ReportSettings;
