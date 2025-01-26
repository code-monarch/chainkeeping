import { useState } from "react";
import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo, Button } from "@chainkeeping/ui";
import Link from "next/link";
import PersonalAccountIcon from "../atoms/personal-account-icon";
import CompanyIcon from "../atoms/company-icon";
import PractitionersIcon from "../atoms/practitioners-icon";

const accountTypes = [
	{
		id: "personal",
		icon: (selected: boolean) => <PersonalAccountIcon selected={selected} />,
		title: "Personal",
		description: "I am an individual looking to manage my crypto taxes.",
	},
	{
		id: "company",
		icon: (selected: boolean) => <CompanyIcon selected={selected} />,
		title: "Company",
		description: "We are a business looking to manage our crypto taxes.",
	},
	{
		id: "practitioners",
		icon: (selected: boolean) => <PractitionersIcon selected={selected} />,
		title: "Practitioners",
		description:
			"We are a business looking to provide crypto-related services to individuals & businesses.",
	},
];

const SelectAccountTypes = () => {
	const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

	const handleSelectAccount = (id: string) => {
		setSelectedAccount(id);
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

				<p className='max-sm:mt-14 font-bold'>Account Type</p>
				<p className='text-sm text-[#4F627D]'>
					Select an account type that best describes you and how you intend to
					use Chainkeeping.
				</p>
				<div className='w-full border-b my-4 flex border-[#21293412]'></div>
				<div className='flex flex-col gap-3 mb-4'>
					{accountTypes.map((account, index) => (
						<div className='space-y-2' key={account.id}>
							<div
								className={`cursor-pointer p-6 rounded-xl flex gap-3 transition-all duration-300 ease-in-out ${
									selectedAccount === account.id
										? "border-[#D82E2E] border bg-[#FEFAFA]"
										: "border-[#E5EBEF] border hover:border-[#D82E2E]"
								}`}
								onClick={() => handleSelectAccount(account.id)}
							>
								<div className='w-[40px]'>
									{typeof account.icon === "function"
										? account.icon(selectedAccount === account.id)
										: account.icon}
								</div>
								<div>
									<p
										className={`text-sm text-[#202B3C] font-bold ${
											selectedAccount === account.id ? "text-[#D82E2E]" : ""
										}`}
									>
										{account.title}
									</p>
									<p
										className={`text-sm text-grey-400 ${
											selectedAccount === account.id ? "text-[#202B3C]" : ""
										}`}
									>
										{account.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<Button
					disabled={!selectedAccount}
					variant='default'
					size='md'
					className={`w-full transition-all duration-300 ease-in-out mt-4 ${
						!selectedAccount ? "opacity-10 cursor-not-allowed" : ""
					}`}
				>
					{selectedAccount ? "Continue" : "Select Account Type"}
				</Button>

				<div className='flex items-center w-full justify-center gap-3 mt-6'>
					<p>Already have an account?</p>{" "}
					<Link className='text-[#D82E2E]' href='/'>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SelectAccountTypes;
