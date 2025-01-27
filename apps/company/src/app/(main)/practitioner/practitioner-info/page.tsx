"use client";
import ListOfPractitioners from "@/pattern/practitioner/templates/list-of-practitioners";
import SinglePractitioner from "@/pattern/practitioner/templates/practitioner-info";
import React from "react";

const PractitionerInfo = () => {
	return (
		<div className='w-full min-h-screen max-sm:mt-14 h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<SinglePractitioner />
		</div>
	);
};

export default PractitionerInfo;
