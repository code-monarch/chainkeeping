"use client";
import PreviewAndApproveSection from "@/pattern/transaction/templates/preview-and-approve-section";

const PreviewAndApprove = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<PreviewAndApproveSection />
		</div>
	);
};

export default PreviewAndApprove;
