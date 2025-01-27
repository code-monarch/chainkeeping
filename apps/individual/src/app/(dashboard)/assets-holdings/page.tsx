"use client";

import AssetsHoldingsSection from "@/pattern/accounts/templates/assets-holdings-section";
import UnresolvedTransactionsSection from "@/pattern/transaction/templates/unresolved-transactions";

const AssetsHoldings = () => {
	return (
		<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<AssetsHoldingsSection />
		</div>
	);
};

export default AssetsHoldings;
