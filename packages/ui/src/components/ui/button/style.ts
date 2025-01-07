export const ButtonStyle = {
	base: "w-fit inline-flex items-center justify-center rounded-md text-sm font-semibold whitespace-nowrap transition-colors disabled:opacity-35 disabled:text-muted disabled:pointer-events-none ring-offset-background cursor-pointer disabled:cursor-not-allowed",
	variants: {
		default:
			"bg-primary text-primary-foreground hover:border-[hsla(0,0%,0%,0.1)] hover:ring-2 hover:ring-[hsla(240,14%,9%,0.25)] focus-visible:outline-none focus-visible:bg-[hsla(240,14%,9%,1)] focus-visible:border-[hsla(0,0%,0%,0.1)] focus-visible:ring-2 focus-visible:ring-[hsla(240,14%,9%,0.25)] shadow",
		secondary:
			"bg-secondary text-secondary-foreground hover:bg-[hsla(0,69%,51%,1)] hover:border-secondary hover:ring-2 hover:ring-[hsla(0,69%,51%,0.25)] focus-visible:outline-none focus-visible:bg-[hsla(0,69%,51%,1)] focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-[hsla(0,69%,51%,0.25)] shadow-[hsla(0,0%,0%,0.1) shadow-[hsla(0,69%,51%,0.1)]",
		destructive:
			"bg-secondary text-secondary-foreground hover:bg-[hsla(0,69%,51%,1)] hover:border-secondary hover:ring-2 hover:ring-[hsla(0,69%,51%,0.25)] focus-visible:outline-none focus-visible:bg-[hsla(0,69%,51%,1)] focus-visible:border-[hsla(0,69%,51%,1)] focus-visible:ring-2 focus-visible:ring-[hsla(0,69%,51%,0.25)] shadow-[hsla(0,0%,0%,0.1) shadow-[hsla(0,69%,51%,0.1)]",
		outline:
			"border border-secondary bg-shite text-secondary shadow-sm hover:border-secondary hover:ring-2 hover:ring-[hsla(0,69%,51%,0.25)] focus-visible:outline-none focus-visible:bg-[hsla(0,69%,51%,1)] focus-visible:border-[hsla(0,69%,51%,1)] focus-visible:ring-2 focus-visible:ring-[hsla(0,69%,51%,0.25)] shadow-[hsla(0,0%,0%,0.1) shadow-[hsla(0,69%,51%,0.1)]",

		ghost: "hover:bg-accent hover:text-accent-foreground",
		link: "text-secondary underline-offset-4 hover:underline",
	},
	sizes: {
		lg: "h-14 py-4 px-8",
		md: "h-12 py-3 px-6",
		sm: "h-9 px-4",
		xs: "h-9 px-3",
		icon: "size-10 rounded-full",
	},
};
