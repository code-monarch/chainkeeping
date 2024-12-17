export const BadgeStyle = {
    base: "w-fit flex items-center justify-center gap-1 text-sm font-normal transition-colors focus:outline-none p-[8px]",
    variants: {
        default: "bg-[hsla(217,100%,83%,0.1)] text-primary",
        secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        warning: "bg-[hsla(19,89%,61%,0.1)] text-[hsla(19,89%,61%,1)]",
        success: "bg-[hsla(136,100%,96%,1)] text-[hsla(137,64%,46%,1)]",
        successOutline: "bg-[hsla(0,0%,100%,1)] text-[hsla(137,64%,46%,1)] border border-[#E9E9F0]",
    },
    size: {
        default: "h-[24px] min-w-[82px] rounded-[4px]",
        lg: "h-[34px] min-w-[82px] rounded-[17px]",
    },
}