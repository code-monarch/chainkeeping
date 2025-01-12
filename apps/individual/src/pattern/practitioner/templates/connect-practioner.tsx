import React from "react";
import { Button } from "@chainkeeping/ui";
import ArrowRightIcon from "../atoms/arrow-right-icon";
import PractitionerTables from "../organisms/practitioner-tables";
import AddPractitionerWidget from "../organisms/add-practitioner-widget";
import { useRouter } from "next/navigation";

const ConnectPractioner = () => {
	const router = useRouter();

	// Function to handle login click
	const handleConnect = () => {
		router.push("/practitioner/connect-to-a-practitioner");
	};

	return (
		<div className='md:px-16 flex flex-col h-full gap-4 justify-between pt-10 max-sm:px-4 max-sm:flex-col '>
			<div className='w-full flex max-sm:flex-col gap-4 bg-white py-6 px-8 rounded-lg'>
				<img
					src='/connect.gif'
					height={124}
					width={124}
					className='h-[124px] w-[124px] max-sm:h-full max-sm:w-full'
					alt='connect-to-practioner'
				/>
				<div className='flex flex-col gap-4'>
					<h6 className='font-bold '>Connect to a practitioner</h6>
					<p className='text-[#384860]'>
						Simplify your tax management with the help of a professional, let
						our network of certified practitioners take care of your account.
					</p>
					<Button
						onClick={handleConnect}
						variant='secondary'
						size='sm'
						className='text-base px-3 gap-1'
					>
						Connect <ArrowRightIcon />
					</Button>
				</div>
			</div>
			<AddPractitionerWidget />
			<PractitionerTables />
		</div>
	);
};

export default ConnectPractioner;
