"use client";
import BulkPaymentTransactionSection from "@/pattern/transaction/templates/bulk-payment-transaction-section";

const Transactions = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<BulkPaymentTransactionSection />
		</div>
	);
};

export default Transactions;
