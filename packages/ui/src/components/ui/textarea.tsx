import React, { forwardRef } from "react"

import { cn } from "../../lib/utils"

const Textarea = forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[80px] w-full rounded-md border border-[#E9E9F0] bg-background px-3 py-2 text-base ring-offset-background hover:border-secondary placeholder:text-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea }
