import React from "react";
import TransactionsTable from "../molecules/recent-transactions";
import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import UsdtIcon from "../atoms/transactions-icons/usdt-icon";
import FanthomIcon from "../atoms/transactions-icons/fantom-icon";
import AvaxIcon from "../atoms/transactions-icons/avax-icon";
import TustIcon from "../atoms/transactions-icons/tust-icon";
import TrustWalletIcon from "../atoms/transactions-icons/trust-wallet-icon";
import CakeIcon from "../atoms/transactions-icons/cake-icon";
import TrustIcon from "../atoms/transactions-icons/trust-token-icon";
import BusdIcon from "../atoms/transactions-icons/busd-icon";
import VetIcon from "../atoms/transactions-icons/vet-icon";
import StxIcon from "../atoms/transactions-icons/stx-icon";

const transactions = [
	{
		date: "Feb 16, 2023",
		time: "04:29 PM",
		type: "Trade",
		platform_name: "Binance",
		platform: <BinanceIcon />,
		sentAmount: "-300.087",
		sentAsset: "USDT",
		sentAssetIcon: <UsdtIcon />,
		receivedAmount: "+664.0562",
		receivedAsset: "FTM",
		receivedAssetIcon: <FanthomIcon />,
		costBasis: "NGN 223,700.00 - Cost basis",
		approx: "NGN 224,000.00",
		ngnValue: "NGN 350.00",
	},
	{
		date: "Feb 16, 2023",
		time: "04:29 PM",
		type: "Trade",
		platform_name: "Avalanche",
		platform: <AvaxIcon />,
		sentAmount: "-300.087",
		sentAsset: "AVAX",
		sentAssetIcon: <AvaxIcon />,
		receivedAmount: "+664.0562",
		receivedAsset: "TUST",
		receivedAssetIcon: <TustIcon />,
		costBasis: "NGN 223,700.00 - Cost basis",
		approx: "NGN 224,000.00",
		ngnValue: "NGN 350.00",
	},
	{
		date: "Feb 16, 2023",
		time: "04:29 PM",
		type: "Trade",
		platform_name: "Trust Wallet",
		platform: <TrustWalletIcon />,
		sentAmount: "-300.087",
		sentAsset: "CAKE",
		sentAssetIcon: <CakeIcon />,
		receivedAmount: "+664.0562",
		receivedAsset: "TWT",
		receivedAssetIcon: <TrustIcon />,
		costBasis: "NGN 223,700.00 - Cost basis",
		approx: "NGN 224,000.00",
		ngnValue: "NGN 350.00",
	},
	{
		date: "Feb 16, 2023",
		time: "04:29 PM",
		type: "Trade",
		platform_name: "Binance",
		platform: <BinanceIcon />,
		sentAmount: "-300.087",
		sentAsset: "BUSD",
		sentAssetIcon: <BusdIcon />,
		receivedAmount: "+664.0562",
		receivedAsset: "VET",
		receivedAssetIcon: <VetIcon />,
		costBasis: "NGN 223,700.00 - Cost basis",
		approx: "NGN 224,000.00",
		ngnValue: "NGN 350.00",
	},
	{
		date: "Feb 16, 2023",
		time: "04:29 PM",
		type: "Trade",
		platform_name: "Binance",
		platform: <BinanceIcon />,
		sentAmount: "-300.087",
		sentAsset: "USDT",
		sentAssetIcon: <UsdtIcon />,
		receivedAmount: "+664.0562",
		receivedAsset: "STX",
		receivedAssetIcon: <StxIcon />,
		costBasis: "NGN 223,700.00 - Cost basis",
		approx: "NGN 224,000.00",
		ngnValue: "NGN 350.00",
	},

	// Add more transactions here...
];

const TransactionList = () => {
	return (
		<div className='w-full flex'>
			<TransactionsTable transactions={transactions} />
		</div>
	);
};

export default TransactionList;
