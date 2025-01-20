import React from "react";
import DangerIcon from "../atoms/danger-icon";

const InfoWidget = () => {
	return (
		<div className='bg-[#F9CC59] rounded-md p-3  gap-1 flex w-full items-center justify-center text-sm'>
			<DangerIcon />
			<p>Click this button only when you’ve actually made the payment.</p>
		</div>
	);
};

export default InfoWidget;
