"use client";
import OrderConfiguration from "@/pattern/practitioner/templates/order-configuration";

import React from "react";

const PractitionerInfo = () => {
	return (
		<div className='w-full min-h-screen max-sm:mt-14 h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<OrderConfiguration />
		</div>
	);
};

export default PractitionerInfo;
