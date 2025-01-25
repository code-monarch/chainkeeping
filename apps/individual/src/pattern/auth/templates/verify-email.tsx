import { useState, useEffect } from "react";
import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo, Button, Input } from "@chainkeeping/ui";
import Link from "next/link";
import InfoIcon from "../atoms/info-icon";
import { useRouter } from "next/navigation";

const VerifyEmailBody = () => {
	const [seconds, setSeconds] = useState(119); // Starting countdown from 119 seconds
	const [isCountdownFinished, setIsCountdownFinished] = useState(false);

	useEffect(() => {
		if (seconds === 0) {
			setIsCountdownFinished(true); // Countdown finished
			return;
		}

		const intervalId = setInterval(() => {
			setSeconds((prev: number) => prev - 1);
		}, 1000);

		return () => clearInterval(intervalId); // Cleanup the interval on unmount
	}, [seconds]);

	const router = useRouter(); // Initialize useRouter

	// Function to handle login click
	const handleSignUp = () => {
		// You can add your login logic here (e.g., validation, API call, etc.)

		// Redirect to the dashboard page after successful login
		router.push("/verification-success");
	};

	return (
		<div className='sm:mt-10 w-full flex flex-col sm:items-center'>
			<Link href={APP_ROUTES.index} className='max-sm:hidden'>
				<BrandLogo />
			</Link>
			<div className='bg-[#FFFFFF] sm:shadow-md w-[438px] max-sm:w-screen p-6 sm:mt-10 rounded-lg'>
				<Link href={APP_ROUTES.index} className='sm:hidden py-10'>
					<BrandLogo />
				</Link>

				<p className='max-sm:mt-14 font-bold'>Email Verification</p>
				<p className='mt-4  text-sm text-grey-400'>
					We’ve sent a verification code to your email address{" "}
					<b className='text-[#202B3C]'>example@gmail.com</b>, enter
					verification code here.
				</p>
				<div className='w-full border-b my-2 flex border-[#21293412]'></div>

				<div className='space-y-2'>
					<label htmlFor='first-name' className='text-sm'>
						Verification Code
					</label>
					<Input
						id='first-name'
						type='text'
						placeholder='Enter verification code'
					/>
				</div>
				<Button
					variant='default'
					size='md'
					className='w-full mt-5'
					onClick={handleSignUp}
				>
					Verify{" "}
				</Button>
			</div>
			<div className='mt-6 sm:w-[438px] max-sm:px-6'>
				<p className='text-grey-400'>
					Didn’t receive the email? Please check your spam folder or try to
					resend.
				</p>
				<p className='text-[#202B3C] pt-3'>
					{isCountdownFinished ? (
						<span className='text-[#D82E2E] font-medium'>
							Resend verification code
						</span>
					) : (
						`Resend verification code in ${seconds}s`
					)}
				</p>
			</div>
		</div>
	);
};

export default VerifyEmailBody;
