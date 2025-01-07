import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-[50px] w-full rounded-md border border-[#E9E9F0] bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

const InputWithIcon = forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input"> & { icon: React.ReactNode }
>(({ icon, className, ...props }, ref) => {
	return (
		<div className='relative w-full'>
			<span className='absolute left-3 top-1/2 -translate-y-1/2 text-border'>
				{icon}
			</span>
			<input
				className={cn("pl-10", className)} // Adds space for the icon
				ref={ref}
				{...props}
			/>
		</div>
	);
});
InputWithIcon.displayName = "InputWithIcon";

export { Input, InputWithIcon };
