import React, { useState } from "react";
import TaxReportPage from "../organisms/tax-report-page";
import TaxReportForm from "../organisms/tax-report-form";
import ReportTaxCard from "../organisms/report-tax-card";

const TaxReports = () => {
	const [activeTab, setActiveTab] = useState("Tax Reports");

	const renderContent = () => {
		switch (activeTab) {
			case "Tax Reports":
				return (
					<div className='grid grid-cols-3 gap-4 w-full items-start'>
						<TaxReportPage />
						<TaxReportForm />
						<ReportTaxCard />
					</div>
				);
			case "Financial Reports":
				return <div>Content for Financial Reports</div>;
			default:
				return null;
		}
	};

	return (
		<div className='h-full flex flex-col'>
			{/* Fixed Tabs */}
			<div className='fixed  left-0 w-full bg-white shadow-md z-10 pt-3'>
				<div className='flex md:container mx-auto max-w-screen-lg px-4 '>
					<button
						className={`px-4 py-4 font-medium ${
							activeTab === "Tax Reports"
								? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
								: "text-[#94A3B8]"
						}`}
						onClick={() => setActiveTab("Tax Reports")}
					>
						Tax Reports
					</button>
					<button
						className={`px-4 py-2 font-medium ${
							activeTab === "Financial Reports"
								? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
								: "text-[#94A3B8]"
						}`}
						onClick={() => setActiveTab("Financial Reports")}
					>
						Financial Reports
					</button>
				</div>
			</div>

			{/* Tab Content */}
			<div className='pt-24 md:container w-full mx-auto max-w-screen-lg '>
				{renderContent()}
			</div>
		</div>
	);
};

export default TaxReports;
