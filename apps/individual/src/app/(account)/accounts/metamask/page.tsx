"use client";
import PaymentSection from "@/pattern/transaction/templates/payment-section";
import TransactionSection from "@/pattern/transaction/templates/transaction-section";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const Payment = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<Sidebar />
			</div>
			{/* <div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<TransactionSection />
			</div> */}
		</SidebarProvider>
	);
};

export default Payment;
