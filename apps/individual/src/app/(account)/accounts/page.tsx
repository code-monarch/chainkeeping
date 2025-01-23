"use client";
import AccountTransactionSection from "@/pattern/accounts/templates/account-section";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const Payment = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<AccountTransactionSection />
			</div>
		</SidebarProvider>
	);
};

export default Payment;
