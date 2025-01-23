"use client";
import BulkPaymentSection from "@/pattern/transaction/templates/bulk-payment-section";
import TransactionSection from "@/pattern/transaction/templates/transaction-section";

const Transactions = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<BulkPaymentSection />
		</div>
	);
};

export default Transactions;
