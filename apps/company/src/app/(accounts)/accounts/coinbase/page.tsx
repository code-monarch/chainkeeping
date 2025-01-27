"use client";
import ExchangeTransactionSection from "@/pattern/accounts/templates/exchange-transaction-section";
import { SidebarProvider } from "@chainkeeping/ui";

const CoinBase = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<ExchangeTransactionSection />
			</div>
		</SidebarProvider>
	);
};

export default CoinBase;
