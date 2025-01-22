"use client";
import PaymentSection from "@/pattern/transaction/templates/payment-section";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const Payment = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<Sidebar />
				{/* <PaymentSection /> */}
			</div>
		</SidebarProvider>
	);
};

export default Payment;
