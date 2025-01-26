import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdAdd } from "react-icons/io";

const links = [
	{ name: "Profile", href: "/settings" },
	{ name: "Password", href: "/settings/password" },
	{
		name: "Tax settings",
		href: "/settings/tax-settings",
	},
	{ name: "Security", href: "/settings/security" },

	{ name: "Billing", href: "/settings/billing" },
	{ name: "Plans", href: "/settings/plans" },
	{ name: "Verification", href: "/settings/verification" },
];

export function Links() {
	const pathname = usePathname();

	return (
		<div className='flex h-full flex-row border-black  lg:flex-col'>
			{links.map((link) => {
				const isActive = pathname === link.href; // Check if the link is active

				return (
					<div key={link.name} className='w-full flex flex-col'>
						<Link href={link.href}>
							<div
								className={clsx(
									"flex w-full justify-between  items-center gap-2 px-6 py-3 border-r-[3px] transition-colors",
									isActive
										? "border-[#D82E2E] bg-[#FEFAFA]"
										: "border-transparent text-black"
								)}
							>
								<div className='flex gap-2 items-center '>
									<p className=''>{link.name}</p>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
