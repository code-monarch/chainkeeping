import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

const AuthInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-[50px] w-full rounded-md border border-[#E9E9F0] bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:text-sm",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
AuthInput.displayName = "Input";

export { AuthInput };
