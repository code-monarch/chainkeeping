import React from "react";
import PortfolioIcon from "../atoms/portfolio-icon";

import { Button } from "@chainkeeping/ui";
import Image from "next/image";

function ConnectToPractioner() {
	return (
		<div className='bg-background rounded-lg p-4 flex flex-col w-full xl:min-w-[350px] 2xl:min-w-[400px] 3xl:min-w-[420px] lg:min-w-[300px] text-[#64748B] '>
			<div className='flex justify-between w-full pb-3'>
				<div className='flex items-start gap-3'>
					<Image
						src='/connect.gif'
						height={96}
						width={96}
						alt='connect-to-practioner'
					/>
					<div className='flex-col gap-2 flex'>
						<p className='font-bold text-[#202B3C]'>
							Connect to a practitioner
						</p>
						<p className='text-sm text-[#384860] lg:max-w-[250px]'>
							Simplify your tax management with the help of a professional, let
							our network of certified practitioners take care of your account.
						</p>
					</div>
				</div>
			</div>

			<div className='flex w-full justify-between pt-4 items-center'>
				<Button variant='outline' size='md' className='w-full text-base'>
					Connect to a practitioner
				</Button>
			</div>
		</div>
	);
}

export default ConnectToPractioner;
