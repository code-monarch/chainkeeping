import { cn } from "@chainkeeping/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ name: "Profile", href: "/settings" },
	{ name: "Password", href: "/settings/change-password" },
	{ name: "Contact person", href: "/settings/contact-person" },
	{
		name: "Tax settings",
		href: "/settings/tax-settings",
	},
	{ name: "Payroll settings", href: "/settings/contact-person" },
	{ name: "Team & Roles", href: "/settings/team-and-roles" },
	{ name: "Ledger settings", href: "/settings/ledger-settings" },
	{ name: "Security", href: "/settings/security" },

	{ name: "Billing", href: "/settings/billing" },
	{ name: "Plans", href: "/settings/plans" },
	{ name: "Verification", href: "/settings/verification" },
];

export function Links() {
	const pathname = usePathname();

	return (
		<div className='flex h-full flex-row border-black lg:flex-col'>
			{links.map((link) => {
				const isActive = pathname === link.href; // Check if the link is active

				return (
					<div key={link.name} className='w-full flex flex-col'>
						<Link href={link.href}>
							<div
								className={cn(
									"flex w-full justify-between items-center gap-2 pl-8 pr-6 py-3 border-r-[3px] transition-colors",
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
