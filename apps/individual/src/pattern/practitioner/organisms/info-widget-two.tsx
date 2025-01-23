import React from "react";
import InfoButtonIcon from "../atoms/info-button-icon";

const InfoWidgetTwo = () => {
	return (
		<div className='bg-[#E9F2FE] rounded-md p-3  gap-1 flex w-full items-center justify-center text-sm'>
			<InfoButtonIcon />
			<p>Payments may take up to 15 minutes to be confirmed.</p>
		</div>
	);
};

export default InfoWidgetTwo;
