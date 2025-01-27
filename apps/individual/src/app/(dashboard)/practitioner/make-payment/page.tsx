"use client";
import MakePayment from "@/pattern/practitioner/templates/make-payment";
import React from "react";

const Payment = () => {
	return (
		<div className='w-full min-h-screen max-sm:mt-14 h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<MakePayment />
		</div>
	);
};

export default Payment;
