import React, { useState } from "react";
import TaxReportFormIcon from "../atoms/tax-report-form-icon";
import PdfIcon from "../atoms/pdf-icon";
import { Button } from "@chainkeeping/ui";
import InfoButtonIcon from "../atoms/info-button-icon";

const TaxReportForm: React.FC = () => {
	// State to manage the disabled state of the Download button
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false); // State to track fade-out animation

	// Function to handle enabling the button
	const handleSignReportClick = () => {
		setIsFadingOut(true); // Trigger fade-out animation
		setTimeout(() => {
			setIsButtonDisabled(false); // Disable the div after animation
			setIsFadingOut(false); // Reset fade-out state
		}, 300); // Match this timeout to the CSS transition duration
	};

	return (
		<div className='p-4 bg-white rounded-[8px] text-[#202B3C]'>
			<div>
				<div className='flex items-center gap-2 border-b pb-2'>
					<TaxReportFormIcon />
					<h2 className='font-semibold'>Tax report Form</h2>
				</div>
				<ul className='space-y-3'>
					<li className='flex justify-between border-b pb-3 pt-1 mt-6'>
						<span className='text-sm flex font-bold gap-1 items-center'>
							<PdfIcon /> 2022 Tax report
						</span>
						<Button
							variant='secondary'
							size='sm'
							className='text-base'
							disabled={isButtonDisabled}
						>
							Download PDF
						</Button>
					</li>
				</ul>
				<div className='flex justify-between '>
					{(isButtonDisabled || isFadingOut) && (
						<div
							className={`flex py-2 my-4 px-3 min-h-[42px] max-sm:items-center bg-[#E9F2FE] w-full rounded-lg gap-2 cursor-pointer transition-opacity duration-300 ${
								isFadingOut ? "opacity-0" : "opacity-100"
							}`}
							onClick={handleSignReportClick}
						>
							<InfoButtonIcon />
							<p className='text-[#202B3C] lg:max-w-[370px] text-sm'>
								Reports cannot be downloaded unless signed by a practitioner.{" "}
								<span className='font-bold text-[#2F80ED] hover:underline'>
									Sign report
								</span>
							</p>
						</div>
					)}
				</div>
				<p className='text-xs mt-4'>
					<span className='text-[#D82E2E]'>**</span> This is a high-level
					summary of your tax report. Download your tax report to see more
					detailed information.
				</p>
			</div>
		</div>
	);
};

export default TaxReportForm;
