import type { Config } from "tailwindcss"

const sharedConfig = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{jsx,tsx,mdx}",
        "./src/components/ui/*.{jsx,tsx,mdx}",
        "./src/components/**/*.{jsx,tsx,mdx}",
        "./src/pattern/**/*.{jsx,tsx,mdx}",
        "./src/redux/provider.tsx",
        "./src/stories/**/*.{ts,tsx,mdx}",
    ],
} satisfies Config

export { sharedConfig }