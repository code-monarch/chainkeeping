import React, { useState } from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@chainkeeping/ui";
import TwoFAModal from "../organisms/2FA-modal";
import EmailAuthModal from "../organisms/email-auth-modal";
import SmsAuthModal from "../organisms/SMS-auth-modal";
import ToggleIcon from "../atoms/toggle-icon";
import InfoButtonIcon from "@/pattern/reports/atoms/info-button-icon";
import SubscriptionWidget from "../organisms/subscription-widget";
import { InvoiceData } from "../molecules/invoice-data";
import InvoicesTable from "../organisms/invoices-table";

const BillingSettings = () => {
	// Individual toggle states
	const [googleAuthToggled, setGoogleAuthToggled] = useState(true);

	return (
		<div className='w-full flex pt-24 flex-col gap-10 xl:pr-16 pb-[144px] '>
			<div className='bg-white w-full h-fit flex flex-col rounded-[8px] border-none border-b'>
				<div className='h-fit flex justify-between items-center border-b pb-2 px-6 py-4'>
					<h6 className='text-base font-bold font-sen text-grey-300'>
						Basic Plan
					</h6>
					<Button
						size='sm'
						variant='secondary'
						type='button'
						className='text-base font-medium '
					>
						Change plan
					</Button>
				</div>
				<div className='w-full h-full flex flex-col px-6 pb-6 !mt-0'>
					{/* Google Authenticator */}
					<div className='flex justify-between w-full mt-3'>
						<h6 className='font-medium text-sm text-grey-400'>Next Payment</h6>

						<div className='flex gap-2 items-center'>
							<p className='text-sm text-grey-300'>Show payment information</p>
							<ToggleIcon
								toggled={googleAuthToggled}
								onToggle={() => setGoogleAuthToggled(!googleAuthToggled)}
							/>
						</div>
					</div>
					<div className='bg-[#E9F2FE] rounded-md p-3  gap-1 flex w-full items-center  text-sm'>
						<InfoButtonIcon />
						<p>
							Your next bill of $50.00 is scheduled for April 28, 2023, your
							default payment method below will be charged.
						</p>
					</div>
				</div>
				<div className='border-t w-full flex px-6 py-4'>
					<SubscriptionWidget />
				</div>
			</div>
			<InvoicesTable data={InvoiceData} />
		</div>
	);
};

export default BillingSettings;
