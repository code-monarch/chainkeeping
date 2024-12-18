import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";
import { TypographyStyle } from "./style";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva(TypographyStyle.base, {
    variants: {
        variant: TypographyStyle.variants,
    },
    defaultVariants: {
        variant: "default"
    },
})

export type TypographyProps = React.ButtonHTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof typographyVariants> & {
        asChild?: boolean
    }

const Typography = ({ className, variant, asChild = false, ...props }: TypographyProps) => {
    const Comp = asChild ? Slot : "h1"
    return (
        <Comp
            className={cn(typographyVariants({ variant, className }))}
            {...props}
        />
    )
}

export { Typography }