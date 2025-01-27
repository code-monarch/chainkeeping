"use client";
import ConnectPractioner from "@/pattern/practitioner/templates/connect-practioner";
import TaxReports from "@/pattern/reports/templates/tax-reports";

const Practitioner = () => {
	return (
		<div className='w-full min-h-screen h-fit max-sm:mt-14 flex flex-col gap-y-[144px] pb-[88px]'>
			<ConnectPractioner />
		</div>
	);
};

export default Practitioner;
