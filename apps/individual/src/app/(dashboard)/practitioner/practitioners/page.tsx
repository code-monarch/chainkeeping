"use client";
import ListOfPractitioners from "@/pattern/practitioner/templates/list-of-practitioners";
import React from "react";

const Practitioners = () => {
	return (
		<div className='w-full min-h-screen max-sm:mt-14 h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<ListOfPractitioners />
		</div>
	);
};

export default Practitioners;
