import FanthomIcon from "@/pattern/transaction/atoms/fanthom-icon";
import TetherIcon from "@/pattern/transaction/atoms/tether-icon";
import DogeCoin from "../atoms/doge-coin";
import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import ChzIcon from "@/pattern/transaction/atoms/chz-icon";

export const AssetsHoldingData = [
	{
		assets: {
			title: "Fanthom",
			icon: <FanthomIcon />,
		},
		amount: "664.0562 ",
		value: "NGN 102,654.00",
		change_24h: "+0.5%",
		change_30d: "+5%",
		change_1year: "+15%",
	},
	{
		assets: {
			title: "Tether USDT",
			icon: <TetherIcon />,
		},
		amount: "2,340.05 ",
		value: "NGN 2,097,702.00",
		change_24h: "+0.01%",
		change_30d: "+0.01%",
		change_1year: "+0.1%",
	},
	{
		assets: {
			title: "Dogecoin DOGE",
			icon: <DogeCoin />,
		},
		amount: "12,664,609.876 ",
		value: "NGN 312,654.00",
		change_24h: "-8%",
		change_30d: "-28%",
		change_1year: "+1,780%",
	},
	{
		assets: {
			title: "Binance Coin BNB",
			icon: <BinanceIcon />,
		},
		amount: "64.0562",
		value: "NGN 756,654.00",
		change_24h: "+13%",
		change_30d: "+1%",
		change_1year: "+10%",
	},
	{
		assets: {
			title: "Chiliz CHZ",
			icon: <ChzIcon />,
		},
		amount: "3,097.0562 ",
		value: "NGN 12,654.00",
		change_24h: "-7%",
		change_30d: "-7%",
		change_1year: "-17%",
	},
];
