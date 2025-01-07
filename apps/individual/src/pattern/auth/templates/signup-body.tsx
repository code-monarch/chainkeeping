import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo, Button, Checkbox, Input } from "@chainkeeping/ui";
import Link from "next/link";
import GoogleIcon from "../atoms/google-icon";
import Appleicon from "../atoms/apple-icon";

const SignUpBody = () => {
	return (
		<div className='sm:mt-10 w-full flex flex-col sm:items-center'>
			<Link href={APP_ROUTES.index} className='max-sm:hidden'>
				<BrandLogo />
			</Link>
			<div className='bg-[#FFFFFF] sm:shadow-md w-[438px] max-sm:w-screen p-6 sm:mt-10 rounded-lg'>
				<Link href={APP_ROUTES.index} className='sm:hidden py-10'>
					<BrandLogo />
				</Link>
				<p className='max-sm:mt-14 font-bold'>Create Account</p>
				<div className='w-full border-b my-2 flex border-[#21293412]'></div>
				<button className='w-full max-sm:justify-center border focus:border-[#D82E2E] shadow-sm hover:shadow-none transition-all duration-200 ease-in-out gap-2 flex h-12 rounded-md items-center px-4 border-[#21293412] my-4'>
					<GoogleIcon /> <p className='text-[#202B3C]'>Sign up with Google</p>
				</button>
				<button className='w-full max-sm:justify-center border focus:border-[#D82E2E] shadow-sm hover:shadow-none transition-all duration-200 ease-in-out gap-2 flex h-12 rounded-md items-center px-4 border-[#21293412] '>
					<Appleicon /> <p className='text-[#202B3C]'>Sign up with Apple</p>
				</button>
				<div className='py-3 flex w-full gap-3 items-center'>
					<div className='border-b w-full'></div>
					<p className='text-[#202B3C]'>OR</p>
					<div className='border-b w-full'></div>
				</div>
				<div className='space-y-2'>
					<label htmlFor='email' className='text-sm'>
						Email Address
					</label>
					<Input id='email' type='email' placeholder='yourmail@gmail.com' />
				</div>
				<div className='space-y-2 my-2'>
					<label htmlFor='email' className='text-sm'>
						Password
					</label>
					<Input id='email' type='password' placeholder='enter yor password' />
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex items-start gap-2'>
						<Checkbox />
						<p className='text-sm text-[#202B3C]'>
							By clicking continue, you agree to our{" "}
							<Link
								href='#'
								className='text-[#D82E2E] hover:border-b border-[#D82E2E] transition-all duration-200 ease-in-out'
							>
								Terms of service{" "}
							</Link>{" "}
							and{" "}
							<Link
								href='/'
								className='text-[#D82E2E] hover:border-b border-[#D82E2E] transition-all duration-200 ease-in-out'
							>
								Privacy policy{" "}
							</Link>
						</p>
					</div>
				</div>
				<Button variant='default' size='md' className='w-full mt-4'>
					Log in{" "}
				</Button>

				<div className='flex items-center text-[#202B3C] w-full justify-center gap-3 mt-6'>
					<p>Already have an account?</p>{" "}
					<Link
						className='text-[#D82E2E] hover:border-b border-[#D82E2E]'
						href='/'
					>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUpBody;
