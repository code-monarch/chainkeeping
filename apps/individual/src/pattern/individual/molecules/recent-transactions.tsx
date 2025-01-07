import React from "react";
import TradeIcon from "../atoms/transactionsIcons/trade-icon";
import ArrowIcon from "../atoms/transactionsIcons/arrow-icon";
import { Button } from "@chainkeeping/ui";

interface Transaction {
	date: string;
	time: string;
	type: React.ReactNode; // Updated for generic content like JSX
	platform: React.ReactNode; // Updated for generic content like JSX
	platform_name: string;
	sentAmount: string;
	sentAsset: string;
	sentAssetIcon: React.ReactNode; // Updated for JSX or other icons
	receivedAmount: string;
	receivedAsset: string;
	receivedAssetIcon: React.ReactNode; // Updated for JSX or other icons
	costBasis: string;
	approx: string;
	ngnValue: string;
}

interface TransactionsTableProps {
	transactions: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
	transactions,
}) => {
	return (
		<div className='bg-white rounded-lg w-full flex flex-col p-4 text-[#202B3C]'>
			<div className='flex justify-between items-center mb-4 border-b pb-2'>
				<h3 className='font-medium text-base'>Recent transactions</h3>
				<Button variant='outline' size='sm'>
					View All
				</Button>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full text-left border-collapse'>
					<thead>
						{/* <tr>
							<th className='py-2 px-4 text-gray-600 sticky left-0 bg-white'>
								Date
							</th>
							<th className='py-2 px-4 text-gray-600'>Type</th>
							<th className='py-2 px-4 text-gray-600'>Platform</th>
							<th className='py-2 px-4 text-gray-600'>Sent</th>
							<th className='py-2 px-4 text-gray-600'></th>
							<th className='py-2 px-4 text-gray-600'>Received</th>
							<th className='py-2 px-4 text-gray-600'>NGN Value</th>
						</tr> */}
					</thead>
					<tbody>
						{transactions.map((transaction: Transaction, index: number) => (
							<tr key={index} className='border-b'>
								{/* Sticky column */}
								<td className='py-4 pr-4 text-[#222222] sticky whitespace-nowrap left-0 bg-white z-10 shadow-[3px 0px 5px rgba(0,0,0,1)]'>
									<p className='text-sm'>{transaction.date}</p>
									<p className='text-[10px] text-[#64748B]'>
										{transaction.time}
									</p>
								</td>
								{/* Scrollable content */}
								<td className='py-2 px-4 whitespace-nowrap'>
									<div className='flex items-center gap-1 bg-[#F5F8FA] px-2 py-1 rounded-md'>
										<TradeIcon />
										<p className='text-[#384860] text-sm'>{transaction.type}</p>
									</div>
								</td>
								<td className='py-2 px-4 whitespace-nowrap'>
									<div className='flex items-center gap-2'>
										{transaction.platform}
										<p className='text-sm'>{transaction.platform_name}</p>
									</div>
								</td>
								<td className='py-2 px-4 whitespace-nowrap'>
									<div className='flex whitespace-nowrap gap-2'>
										<div className='flex flex-col gap-1 items-end'>
											<p className='text-sm'>
												{transaction.sentAmount} {transaction.sentAsset}
											</p>
											<p className='text-[10px] text-[#64748B] font-medium'>
												{transaction.costBasis}
											</p>
										</div>
										{transaction.sentAssetIcon}
									</div>
								</td>
								<td className='py-2 px-4'>
									<ArrowIcon />
								</td>
								<td className='py-2 px-4 whitespace-nowrap'>
									<div className='flex gap-2'>
										{transaction.receivedAssetIcon}
										<div>
											<p className='text-sm'>
												{transaction.receivedAmount} {transaction.receivedAsset}
											</p>
											<p className='text-[10px] text-[#64748B]'>
												≈ {transaction.approx}
											</p>
										</div>
									</div>
								</td>
								<td className='py-2 px-4 text-[#27AE60] text-sm text-end whitespace-nowrap'>
									<p>{transaction.ngnValue}</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TransactionsTable;
