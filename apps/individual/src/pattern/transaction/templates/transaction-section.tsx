import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@chainkeeping/ui";
import TransactionCard from "../organisms/transaction-card";
import NoAccountIcon from "@/pattern/individual/atoms/no-account-icon";
import TransactionTable from "../organisms/transaction-table";

import { transactionData } from "../molecules/transaction-data";

const TransactionSection = () => {
	const [hasAccount, setHasAccount] = useState<boolean>(true);

	const router = useRouter();

	const handleAddAccount = () => {
		router.push("/add-account");
	};

	return (
		<div className='h-full'>
			{hasAccount ? (
				<div className='md:px-16 flex h-full gap-4 justify-between pt-10 max-sm:px-4 max-sm:flex-col'>
					<div className='flex-col flex gap-4 w-full'>
						<TransactionCard />
						<TransactionTable data={transactionData} />
					</div>
				</div>
			) : (
				<div className='flex flex-col h-full justify-center items-center mt-40'>
					<NoAccountIcon />
					<p className='text-sm font-bold text-[#202B3C] mt-6'>
						No transaction yet
					</p>
					<p className='text-sm text-grey-400 pt-1 pb-8 sm:max-w-[420px] text-center'>
						Account transaction data will show up here when you add an exchange,
						wallet or make imports.
					</p>
					<Button
						variant='default'
						size='md'
						className='text-base'
						onClick={handleAddAccount}
					>
						Add new transaction
					</Button>
				</div>
			)}
		</div>
	);
};

export default TransactionSection;
