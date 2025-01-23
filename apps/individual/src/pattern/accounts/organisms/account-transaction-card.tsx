import Link from "next/link";
import TradesIcon from "@/pattern/transaction/atoms/trades-icon";
import IncomingIcon from "@/pattern/transaction/atoms/incoming-icon";
import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";

const assetStats = [
	{
		id: 1,
		title: "Binance",
		icon: <BinanceIcon />,
		basis: "Transaction count",
		value: "7,679",
		volume_name: "Total Volume",
		total: "40,453,456.26",
		rate: "",
	},
	{
		id: 2,
		title: "Trades",
		icon: <TradesIcon />,
		basis: "Total",
		value: "5,011",
		volume_name: "Volume",
		total: "30,340,430.40",
		rate: "",
	},
	{
		id: 3,
		title: "Incoming",
		icon: <IncomingIcon />,
		basis: "Total",
		value: "456",
		volume_name: "Volume",
		total: "15,097,280.54",
		rate: "",
	},
];

const AccountTransactionCard = () => {
	const formatTotal = (total: string) => {
		const [whole, decimal] = total.split(".");
		return { whole, decimal };
	};

	return (
		<div className='grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 font-dmsans'>
			{assetStats.map((asset) => {
				const { whole, decimal } = formatTotal(asset.total);

				return (
					<div className='space-y-2 bg-[#FFFFFF] rounded-lg p-4' key={asset.id}>
						<div className='flex items-center gap-2 w-full mb-3'>
							{asset.icon}
							<p className=' font-medium'>{asset.title}</p>
						</div>
						<div className='border-b border-[#E6E9EE]'></div>
						<div className='flex justify-between pt-4 flex-col gap-4'>
							<div className='flex items-center gap-1 justify-between w-full text-sm'>
								<p className='text-[#384860] '>{asset.basis}</p>
								<p className='font-bold flex items-center '>
									{asset.value}
									{asset.rate && (
										<Link
											href='/transactions/unresolved-transactions'
											className='font-normal text-[#94A3B8] pl-3'
										>
											{asset.rate}
										</Link>
									)}
								</p>
							</div>
							<div className='flex items-center justify-between w-full gap-1 text-sm'>
								<p className='text-[#384860] '>{asset.volume_name}</p>
								<p className='font-bold'>
									<span className='font-normal text-[#94A3B8]'>NGN</span>{" "}
									{asset.total}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AccountTransactionCard;
