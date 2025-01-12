import React from "react";

import ReportSettings from "../molecules/report-setting";
import PlanCard from "@/pattern/individual/organisms/plan-card";
import ReportChecklist from "../molecules/report-checklist";

const ReportTaxCard: React.FC = () => {
	return (
		<div className='text-[#202B3C] flex flex-col gap-4'>
			<ReportSettings />
			<ReportChecklist />
			<PlanCard />
		</div>
	);
};

export default ReportTaxCard;
