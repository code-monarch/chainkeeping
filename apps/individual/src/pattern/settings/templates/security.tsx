import React, { useState } from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@chainkeeping/ui";
import TwoFAModal from "../organisms/2FA-modal";

const SecuritySettings = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div className='w-fit flex  pt-24 flex-col items-center  px-[18px] pb-[144px]'>
			<Card className='bg-white w-fit max-w-[800px] lg:w-[800px] h-fit  flex flex-col p-6 rounded-[8px] sahdow-md border-none'>
				<CardHeader className='h-fit lg:h-[30px] flex items-start justify-start pb-2 '>
					<CardTitle className='text-base font-bold font-sen text-grey-300'>
						SET UP, ENABLE OR DISABLE 2-FACTOR AUTHENTICATION
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col !mt-0'>
					<form className='flex flex-col gap-5 mt-5'>
						<div className='flex  justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>Google Authenticator</h6>
								<p className='text-grey-400 text-sm'>
									Use the Google Authenticator app to generate one time security
									codes{" "}
								</p>
							</div>
							<Button
								onClick={openModal}
								size='sm'
								variant='secondaryOutline'
								type='button'
								className=' text-base font-medium mt-[8px]'
							>
								Set up
							</Button>
						</div>
						<div className='flex items-center justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>Email</h6>
								<p className='text-grey-400 text-sm'>
									Send One-time-password to your email
								</p>
							</div>
							<Button
								onClick={openModal}
								size='sm'
								variant='secondaryOutline'
								type='button'
								className=' text-base font-medium mt-[8px]'
							>
								Save
							</Button>
						</div>

						<div className='flex items-center justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>
									Text Message (SMS)
									<span className='text-destructive'>*</span>
								</h6>
								<p className='text-grey-400 text-sm'>
									Add a mobile phone number for authentication
								</p>
							</div>
							<Button
								size='sm'
								variant='secondaryOutline'
								type='submit'
								className=' text-base font-medium mt-[8px]'
							>
								Save
							</Button>
						</div>
						<div className='flex items-center justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>YubiKey</h6>
								<p className='text-grey-400 text-sm'>
									Set up additional layer of authentication with YubiKey
								</p>
							</div>
							<Button
								size='sm'
								variant='primaryOutline'
								type='submit'
								className=' text-base font-medium mt-[8px] opacity-50'
							>
								Save
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
			<TwoFAModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
};

export default SecuritySettings;
