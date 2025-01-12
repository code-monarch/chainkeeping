"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import {
	Button,
	cn,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@chainkeeping/ui";

interface Date {
	name: string;
}

const dates: Date[] = [
	{ name: "2025" },
	{ name: "2024" },
	{ name: "2023" },
	{ name: "2022" },
	{ name: "2021" },
	{ name: "2020" },
	{ name: "2019" },
	{ name: "2018" },
	{ name: "2017" },
	{ name: "2016" },
	{ name: "2015" },
];

interface DateSelectProps {
	value: string;
	setValue: (value: string) => void;
}

export function DateSelect({ value, setValue }: DateSelectProps) {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='ghost'
					size='sm'
					role='combobox'
					aria-expanded={open}
					className='w-7 h-7 bg-[#E5EBEF] rounded-md flex justify-center items-center'
				>
					<div className='flex items-center gap-1'>
						<ChevronDown className='h-4 w-fit shrink-0 opacity-50' />
					</div>
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[100px] p-0'>
				<Command>
					<CommandEmpty>No date found.</CommandEmpty>
					<CommandGroup>
						{dates.map((date) => (
							<CommandItem
								key={date.name}
								value={date.name}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? "" : currentValue);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === date.name ? "opacity-100" : "opacity-0"
									)}
								/>
								{date.name}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
