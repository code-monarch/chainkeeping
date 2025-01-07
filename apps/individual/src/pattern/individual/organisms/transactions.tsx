import React from "react";
import TransactionsTable from "../molecules/recent-transactions";
import TradeIcon from "../atoms/transactionsIcons/trade-icon";
import BinanceExchangeIcon from "../atoms/transactionsIcons/binance-exchange-icon";
import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import UsdtIcon from "../atoms/transactionsIcons/usdt-icon";
import FanthomIcon from "../atoms/transactionsIcons/fantom-icon";
import AvaxIcon from "../atoms/transactionsIcons/avax-icon";
import TustIcon from "../atoms/transactionsIcons/tust-icon";
import TrustWalletIcon from "../atoms/transactionsIcons/trust-wallet-icon";
import CakeIcon from "../atoms/transactionsIcons/cake-icon";
import TrustIcon from "../atoms/transactionsIcons/trust-token-icon";
import BusdIcon from "../atoms/transactionsIcons/busd-icon";
import VetIcon from "../atoms/transactionsIcons/vet-icon";
import StxIcon from "../atoms/transactionsIcons/stx-icon";

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
