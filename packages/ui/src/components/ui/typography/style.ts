export const TypographyStyle = {
    // base: "w-fit whitespace-pre-wrap text-foreground font-bold font-rubik underline decoration-[#fcbfbf] decoration-4",
    base: "relative inline-block w-fit whitespace-pre-wrap text-foreground font-bold font-rubik after:content-[''] after:absolute after:left-0 after:bottom-[6px] after:w-full after:h-[6px] after:bg-[hsla(0,69%,51%,0.35)]",
    variants: {
        default: "text-[0.5rem] lg:text-[2rem] leading-[35.2px]",
        h1:
            "text-[2.5rem] lg:text-[3.5rem] leading-[61.6px]",
        h2:
            "text-3xl lg:text-5xl leading-[52.8px]",
        h3:
            "text-[1rem] lg:text-[2.5rem] leading-[44px]",

        h4: "text-[0.5rem] lg:text-[2rem] leading-[35.2px]",

        h6: "text-lg lg:text-xl leading-[22px]",
    }
}