import { useState, useEffect } from "react";
import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo, Button, Input } from "@chainkeeping/ui";
import Link from "next/link";
import Image from "next/image";

const VerifySuccessBody = () => {
	return (
		<div className='sm:mt-10 w-full flex flex-col sm:items-center'>
			<Link href={APP_ROUTES.index} className='max-sm:hidden'>
				<BrandLogo />
			</Link>
			<div className='bg-[#FFFFFF] sm:shadow-md w-[438px] max-sm:w-screen p-6 sm:mt-10 rounded-lg justify-center text-center'>
				<Link href={APP_ROUTES.index} className='sm:hidden py-10'>
					<BrandLogo />
				</Link>
				<div className='w-full flex justify-center items-center mb-6'>
					<img src='/successful.svg' alt='' />
				</div>

				<p className='max-sm:mt-14 font-bold '>Email verified successfully</p>
				<p className='mt-4  text-sm text-[#64748B]'>
					Your email has been verified successfully, you’ll now be redirected to
					your dashboard shortly.
				</p>

				<Button variant='default' size='md' className='w-full mt-5'>
					Go to dashboard
				</Button>
			</div>
		</div>
	);
};

export default VerifySuccessBody;
