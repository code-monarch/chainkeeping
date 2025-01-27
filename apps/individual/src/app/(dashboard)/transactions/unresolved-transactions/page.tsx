"use client";

import UnresolvedTransactionsSection from "@/pattern/transaction/templates/unresolved-transactions";

const UnresolvedTransactions = () => {
	return (
		<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<UnresolvedTransactionsSection />
		</div>
	);
};

export default UnresolvedTransactions;
