import { useState } from "react";
import { APP_ROUTES } from "@/lib/routes";
import {
	BrandLogo,
	Button,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@chainkeeping/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdditionalInfoBody = () => {
	const [country, setCountry] = useState<string>(""); // Stores the selected country
	const [selectedCountry, setSelectedCountry] = useState({
		code: "+234",
		flag: "🇳🇬",
	});
	const [phoneNumber, setPhoneNumber] = useState("");

	// List of countries with flags and codes
	const countryOptions = [
		{ code: "+234", flag: "🇳🇬", name: "Nigeria" },
		{ code: "+1", flag: "🇺🇸", name: "United States" },
		{ code: "+44", flag: "🇬🇧", name: "United Kingdom" },
		{ code: "+61", flag: "🇦🇺", name: "Australia" },
	];

	// States grouped by country
	const statesByCountry: { [key: string]: string[] } = {
		nigeria: ["Lagos", "Abuja", "Port Harcourt"],
		"united-state": ["California", "Texas", "Florida"],
		"united-kingdom": ["London", "Manchester", "Birmingham"],
		canada: ["Ontario", "Quebec", "British Columbia"],
		australia: ["New South Wales", "Victoria", "Queensland"],
	};

	const handleCountryChange = (value: string) => {
		setCountry(value); // Set the selected country
	};

	const router = useRouter(); // Initialize useRouter

	// Function to handle login click
	const handleSignUp = () => {
		// You can add your login logic here (e.g., validation, API call, etc.)

		// Redirect to the dashboard page after successful login
		router.push("/verify-email");
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
				<p className='max-sm:mt-14 font-bold'>Additional information</p>
				<div className='w-full border-b my-2 flex border-[#21293412]'></div>

				<div className='space-y-2'>
					<label htmlFor='first-name' className='text-sm'>
						First Name
					</label>
					<Input id='first-name' type='text' placeholder='First name' />
				</div>
				<div className='space-y-2 my-2'>
					<label htmlFor='last-name' className='text-sm'>
						Last Name
					</label>
					<Input id='last-name' type='text' placeholder='Last name' />
				</div>

				{/* Phone Number Input */}
				<div className='space-y-2 my-2'>
					<label htmlFor='last-name' className='text-sm'>
						Phone Number
					</label>
					<div className='flex items-center border rounded-lg  border-[#CBD5E1] w-full  h-12 px-[1px]'>
						<div className='relative flex items-center  overflow-hidden '>
							<select
								value={selectedCountry.code}
								onChange={(e) => {
									const selected = countryOptions.find(
										(option) => option.code === e.target.value
									);
									if (selected) setSelectedCountry(selected);
								}}
								className='appearance-none h-11 px-2 overflow-hidden bg-[#F5F8FA] text-sm font-medium cursor-pointer focus:outline-none'
							>
								{countryOptions.map((option) => (
									<option
										key={option.code}
										value={option.code}
										className='bg-white'
									>
										{option.flag} ({option.code})
									</option>
								))}
							</select>
						</div>

						<input
							type='text'
							placeholder='813 123 4567'
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							className='flex-1 pl-2 text-sm font-medium placeholder-gray-400 focus:outline-none'
						/>
					</div>
				</div>

				{/* Country Dropdown */}
				<div className='space-y-2 mt-4'>
					<label htmlFor='country' className='text-sm'>
						Country
					</label>
					<Select onValueChange={handleCountryChange}>
						<SelectTrigger>
							<SelectValue placeholder='Select' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='nigeria'>Nigeria</SelectItem>
							<SelectItem value='united-state'>United States</SelectItem>
							<SelectItem value='united-kingdom'>United Kingdom</SelectItem>
							<SelectItem value='canada'>Canada</SelectItem>
							<SelectItem value='australia'>Australia</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{/* State of Residence Dropdown */}
				<div className='space-y-2 mt-4'>
					<label htmlFor='state' className='text-sm'>
						State of Residence
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='Select' />
						</SelectTrigger>
						<SelectContent>
							{statesByCountry[country]?.map((state) => (
								<SelectItem key={state} value={state}>
									{state}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<Button
					variant='default'
					size='md'
					className='w-full mt-5'
					onClick={handleSignUp}
				>
					Complete sign up
				</Button>
			</div>
		</div>
	);
};

export default AdditionalInfoBody;
