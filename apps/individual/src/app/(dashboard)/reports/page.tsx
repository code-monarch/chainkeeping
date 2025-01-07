"use client";
import React from "react";
import AssetsSection from "@/pattern/individual/templates/assets-section";
import TaxReports from "@/pattern/reports/templates/tax-reports";

const Reports = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<TaxReports />
		</div>
	);
};

export default Reports;
