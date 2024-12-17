import type { Config } from "tailwindcss"

import { sharedConfig } from "@chainkeeping/tailwind-config"
import { shadcnPreset } from "@chainkeeping/tailwind-config/lib/shadcn-preset"

const config = {
  ...sharedConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/*.{jsx,tsx,mdx}",
    "./src/components/**/*.{jsx,tsx,mdx}"],
  presets: [shadcnPreset],
} satisfies Config

export default config