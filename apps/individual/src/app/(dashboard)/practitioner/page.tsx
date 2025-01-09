"use client";
import ConnectPractioner from "@/pattern/practitioner/templates/connect-practioner";
import TaxReports from "@/pattern/reports/templates/tax-reports";

const Practitioner = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<ConnectPractioner />
		</div>
	);
};

export default Practitioner;
