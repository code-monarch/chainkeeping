import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo, Button, Checkbox, Input } from "@chainkeeping/ui";
import Link from "next/link";

const ChangePassword = () => {
	return (
		<div className='sm:mt-10 w-full flex flex-col sm:items-center'>
			<Link href={APP_ROUTES.index} className='max-sm:hidden'>
				<BrandLogo />
			</Link>
			<div className='bg-[#FFFFFF] sm:shadow-md w-[438px] max-sm:w-screen p-6 sm:mt-10 rounded-lg'>
				<Link href={APP_ROUTES.index} className='sm:hidden py-10'>
					<BrandLogo />
				</Link>

				<p className='max-sm:mt-14 font-bold'>Change password</p>
				<p className='mt-4  text-sm text-[#4F627D]'>
					Can’t remember your password? enter your registered email address and
					we’ll send you a password reset link.
				</p>
				<div className='w-full border-b my-2 flex border-[#21293412]'></div>

				<div className='space-y-2'>
					<label htmlFor='email' className='text-sm'>
						New Password
					</label>
					<Input id='email' type='email' placeholder='yourmail@gmail.com' />
				</div>
				<div className='space-y-2 my-2'>
					<label htmlFor='email' className='text-sm'>
						Confirm Password
					</label>
					<Input id='email' type='password' placeholder='enter yor password' />
				</div>

				<Button variant='default' size='md' className='w-full mt-4'>
					Change password{" "}
				</Button>
			</div>
		</div>
	);
};

export default ChangePassword;
