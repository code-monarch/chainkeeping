import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import TetherIcon from "../atoms/tether-icon";
import FanthomIcon from "../atoms/fanthom-icon";
import BTCIcon from "../atoms/btc-icon";
import LinkIcon from "../atoms/link-icon";
import WalletIcon from "../atoms/wallet-icon";

import BusdIcon from "@/pattern/individual/atoms/transactionsIcons/busd-icon";
import KucionIcon from "../atoms/kucion-icon";
import XtzIcon from "../atoms/xtz-icon";
import MaticIcon from "@/pattern/practitioner/atoms/matic-icon";
import UnknownIcon from "../atoms/unknown-icon";

export const UnresolvedTransactionData = [
	{
		dateTime: {
			date: "Feb 16, 2023 ",
			time: "04:29 PM",
		},

		label: {
			title: "Unknown",
			icon: <UnknownIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-300.087 USDT",
			details: "NGN 223,700.00 - Cost basis",
			icon: <TetherIcon />,
		},
		inTo: {
			amount: "+664.0562 FTM",
			details: "≈ NGN 224,050.00",
			icon: <FanthomIcon />,
		},

		profitLoss: "NGN 350.00",
	},

	{
		dateTime: {
			date: "Feb 16, 2023 ",
			time: "04:29 PM",
		},

		label: {
			title: "Unknown",
			icon: <UnknownIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "",
			details: "",
			icon: "",
		},
		inTo: {
			amount: "+664.0562 BTC",
			details: "≈ NGN 224,050.00",
			icon: <BTCIcon />,
		},

		profitLoss: "- NGN 15.00",
	},
	{
		dateTime: {
			date: "Feb 06, 2023 ",
			time: "04:29 PM",
		},

		label: {
			title: "Unknown",
			icon: <UnknownIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-105.956 LINK",
			details: "NGN 90,160.50 - Cost Basis",
			icon: <LinkIcon />,
		},
		inTo: {
			amount: "",
			details: "0x2c9b...fa23bc093ae",
			icon: <WalletIcon />,
		},

		profitLoss: "",
	},
	{
		dateTime: {
			date: "Feb 06, 2023 ",
			time: "12:20 PM",
		},

		label: {
			title: "Unknown",
			icon: <UnknownIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-105.956 MATIC",
			details: "NGN 90,160.50 - Cost Basis",
			icon: <MaticIcon />,
		},
		inTo: {
			amount: "+121.80976 BUSD",
			details: "≈ NGN 90,145.50",
			icon: <BusdIcon />,
		},

		profitLoss: "",
	},
	{
		dateTime: {
			date: "Feb 06, 2023 ",
			time: "12:20 PM",
		},

		label: {
			title: "Unknown",
			icon: <UnknownIcon />,
		},
		account: "Kucion",
		accountIcon: <KucionIcon />,
		outFrom: {
			amount: "",
			details: "",
			icon: "",
		},
		inTo: {
			amount: "+24.8 XTZ",
			details: "≈ NGN 20,860.00",
			icon: <XtzIcon />,
		},

		profitLoss: "NGN 20,860.00",
	},
];
