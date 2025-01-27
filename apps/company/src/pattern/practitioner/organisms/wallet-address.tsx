import React from "react";
import FileIcon from "../atoms/doc-icon";
import WalletIcon from "../atoms/wallet-icon";
import CopyIcon from "@/pattern/taxes/atoms/copy-icon";

const WalletAddress = () => {
	return (
		<div className='flex flex-col w-full gap-3'>
			<div className='rounded-[6px] bg-[#F5F8FA] text-sm flex gap-1 items-center justify-between border-dashed p-3 w-full'>
				<div className='flex items-center gap-2 '>
					<WalletIcon />
					<p className='font-bold'>
						0x078395eec8b3b15888b70cf64db2fadc12b6d8...
					</p>
				</div>
				<CopyIcon />
			</div>
			<p className='text-sm text-[#F14848]'>
				Please send only Tether , ERC-20 USDT to this address, as sending any
				other cryptocurrency will be lost.
			</p>
		</div>
	);
};

export default WalletAddress;
