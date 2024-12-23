import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export const shadcnPlugin = plugin(
    // 1. Add CSS variable definitions to the base layer
    function ({ addBase }) {
        addBase({
            ":root": {
                "--background": "0, 0%, 100%, 1",
                "--foreground": "240, 14%, 9%, 1",
                "--muted": "210, 40%, 98%, 1",
                "--muted-foreground": "216, 9%, 89%, 1",
                "--popover": "0 0% 100%",
                "--popover-foreground": "221, 9%, 37%, 1",
                "--popover-border": "210, 14%, 95%, 1",
                "--card": "0 0% 100%",
                "--card-foreground": "240, 14%, 9%, 1",
                "--border": "213, 27%, 84%, 1",
                "--border-primary": "217, 100%, 62%, 1",
                "--border-hover": "217, 100%, 69%, 1",
                "--border-divider": "210, 14%, 95%, 1",
                "--border-error": "0, 84%, 60%, 1",
                "--input": "240, 14%, 9%, 1",
                "--primary": "240, 14%, 9%, 1",
                "--primary-foreground": "0 0% 100%",
                "--primary-disabled": "0, 0%, 97%, 1",
                "--secondary": "0, 69%, 51%, 1",
                "--secondary-foreground": "0, 0%, 100%, 1",
                "--accent": "204, 33%, 97%, 1",
                "--accent-foreground": "216, 30%, 18%, 1",
                "--label": "221, 9%, 37%, 1",
                "--header-foreground": "227, 54%, 18%, 1",
                "--destructive": "0, 86%, 61%, 1",
                "--destructive-foreground": "0, 0%, 100%, 1",
                "--destructive-hover": "0, 84%, 68%, 1",
                "--grey-700": "216, 30%, 18%, 1",
                "--grey-600": "216, 26%, 30%, 1",
                "--grey-500": "215, 23%, 40%, 1",
                "--grey-400": "215, 16%, 47%, 1",
                "--grey-300": "215, 20%, 65%, 1",
                "--grey-200": "213, 27%, 84%, 1",
                "--grey-100": "204, 33%, 97%, 1",
                "--info": "214, 84%, 56%, 1",
                "--info-foreground": "0, 0%, 100%, 1",
                "--success": "145, 63%, 42%, 1",
                "--success-foreground": "0, 0%, 100%, 1",
                "--warning": "43, 93%, 66%, 1",
                "--warning-foreground": "0, 0%, 0%, 1",
                "--ring": "215 20.2% 65.1%",
                "--radius": "0.5rem",
                "--sidebar-background": "0 0% 98%",
                "--sidebar-foreground": "240 5.3% 26.1%",
                "--sidebar-primary": "240 5.9% 10%",
                "--sidebar-primary-foreground": "0 0% 98%",
                "--sidebar-accent": "240 4.8% 95.9%",
                "--sidebar-accent-foreground": "240 5.9% 10%",
                "--sidebar-border": "220 13% 91%",
                "--sidebar-ring": "217.2 91.2% 59.8%",
                "--radix-navigation-menu-viewport-height": "100%"
            },
            ".dark": {
                "--background": "0, 0%, 100%, 1",
                "--foreground": "240, 14%, 9%, 1",
                "--muted": "210, 40%, 98%, 1",
                "--muted-foreground": "216, 9%, 89%, 1",
                "--popover": "0 0% 100%",
                "--popover-foreground": "221, 9%, 37%, 1",
                "--popover-border": "210, 14%, 95%, 1",
                "--card": "0 0% 100%",
                "--card-foreground": "240, 14%, 9%, 1",
                "--border": "213, 27%, 84%, 1",
                "--border-primary": "217, 100%, 62%, 1",
                "--border-hover": "217, 100%, 69%, 1",
                "--border-divider": "210, 14%, 95%, 1",
                "--border-error": "0, 84%, 60%, 1",
                "--input": "240, 14%, 9%, 1",
                "--primary": "240, 14%, 9%, 1",
                "--primary-foreground": "0 0% 100%",
                "--primary-disabled": "0, 0%, 97%, 1",
                "--secondary": "0, 69%, 51%, 1",
                "--secondary-foreground": "0, 0%, 100%, 1",
                "--accent": "204, 33%, 97%, 1",
                "--accent-foreground": "216, 30%, 18%, 1",
                "--label": "221, 9%, 37%, 1",
                "--header-foreground": "227, 54%, 18%, 1",
                "--destructive": "0, 86%, 61%, 1",
                "--destructive-foreground": "0, 0%, 100%, 1",
                "--destructive-hover": "0, 84%, 68%, 1",
                "--grey-700": "216, 30%, 18%, 1",
                "--grey-600": "216, 26%, 30%, 1",
                "--grey-500": "215, 23%, 40%, 1",
                "--grey-400": "215, 16%, 47%, 1",
                "--grey-300": "215, 20%, 65%, 1",
                "--grey-200": "213, 27%, 84%, 1",
                "--grey-100": "204, 33%, 97%, 1",
                "--info": "214, 84%, 56%, 1",
                "--info-foreground": "0, 0%, 100%, 1",
                "--success": "145, 63%, 42%, 1",
                "--success-foreground": "0, 0%, 100%, 1",
                "--warning": "43, 93%, 66%, 1",
                "--warning-foreground": "0, 0%, 0%, 1",
                "--ring": "215 20.2% 65.1%",
                "--radius": "0.5rem",
                "--sidebar-background": "0 0% 98%",
                "--sidebar-foreground": "240 5.3% 26.1%",
                "--sidebar-primary": "240 5.9% 10%",
                "--sidebar-primary-foreground": "0 0% 98%",
                "--sidebar-accent": "240 4.8% 95.9%",
                "--sidebar-accent-foreground": "240 5.9% 10%",
                "--sidebar-border": "220 13% 91%",
                "--sidebar-ring": "217.2 91.2% 59.8%",
            },
        })

        addBase({
            "*": {
                "@apply p-0 m-0 box-border": {},
            },
            body: {
                "@apply bg-background text-foreground": {},
            },
        })
    },

    // 2. Extend the Tailwind theme with "themable" utilities
    {
        theme: {
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            extend: {
                colors: {
                    border: {
                        DEFAULT: "hsl(var(--border))",
                        primary: "hsl(var(--border-primary))",
                        hover: "hsl(var(--border-hover))",
                        divider: "hsl(var(--border-divider))",
                        error: "hsl(var(--border-error))",
                    },
                    input: "hsl(var(--input))",
                    ring: "hsl(var(--ring))",
                    background: "hsl(var(--background))",
                    foreground: "hsl(var(--foreground))",
                    primary: {
                        DEFAULT: "hsl(var(--primary))",
                        foreground: "hsl(var(--primary-foreground))",
                        disabled: "hsl(var(--primary-disabled))",
                    },
                    secondary: {
                        DEFAULT: "hsl(var(--secondary))",
                        foreground: "hsl(var(--secondary-foreground))",
                    },
                    destructive: {
                        DEFAULT: "hsl(var(--destructive))",
                        foreground: "hsl(var(--destructive-foreground))",
                        hover: "hsl(var(--destructive-hover))",
                    },
                    muted: {
                        DEFAULT: "hsl(var(--muted))",
                        foreground: "hsl(var(--muted-foreground))",
                    },
                    accent: {
                        DEFAULT: "hsl(var(--accent))",
                        foreground: "hsl(var(--accent-foreground))",
                    },
                    popover: {
                        DEFAULT: "hsl(var(--popover))",
                        foreground: "hsl(var(--popover-foreground))",
                        border: "hsl(var(--popover-border))",
                    },
                    card: {
                        DEFAULT: "hsl(var(--card))",
                        foreground: "hsl(var(--card-foreground))",
                    },
                    label: {
                        DEFAULT: "hsl(var(--label))",
                    },
                    sidebar: {
                        DEFAULT: 'hsl(var(--sidebar-background))',
                        foreground: 'hsl(var(--sidebar-foreground))',
                        primary: 'hsl(var(--sidebar-primary))',
                        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                        accent: 'hsl(var(--sidebar-accent))',
                        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                        border: 'hsl(var(--sidebar-border))',
                        ring: 'hsl(var(--sidebar-ring))',
                    },
                },
                borderRadius: {
                    xl: `calc(var(--radius) + 4px)`,
                    lg: `var(--radius)`,
                    md: `calc(var(--radius) - 2px)`,
                    sm: "calc(var(--radius) - 4px)",
                },
                fontFamily: {
                    sen: "var(--font-sen)",
                    dmsans: "var(--font-dmsans)",
                    inter: "var(--font-inter)",
                    rubik: "var(--font-rubik)",
                    space_Grotesk: "var(--font-space_Grotesk)",
                },
                backgroundImage: {
                    'pattern-bg-img': "url('/images/pattern-bg-img.png')",
                },
                keyframes: {
                    "accordion-down": {
                        from: { height: "0" },
                        to: { height: "var(--radix-accordion-content-height)" },
                    },
                    "accordion-up": {
                        from: { height: "var(--radix-accordion-content-height)" },
                        to: { height: "0" },
                    },
                    "caret-blink": {
                        "0%,70%,100%": { opacity: "1" },
                        "20%,50%": { opacity: "0" },
                    },
                    "enterFromRight": {
                        from: { opacity: "0", transform: "translateX(200px)" },
                        to: { opacity: "1", transform: "translateX(0)" },
                    },
                    "enterFromLeft": {
                        from: { opacity: "0", transform: "translateX(-200px)" },
                        to: { opacity: "1", transform: "translateX(0)" },
                    },
                    "exitToRight": {
                        from: { opacity: "1", transform: "translateX(0)" },
                        to: { opacity: "0", transform: "translateX(200px)" },
                    },
                    "exitToLeft": {
                        from: { opacity: "1", transform: "translateX(0)" },
                        to: { opacity: "0", transform: "translateX(-200px)" },
                    },
                    "scaleIn": {
                        from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
                        to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
                    },
                    "scaleOut": {
                        from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
                        to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
                    },
                    "fadeIn": {
                        from: { opacity: "0" },
                        to: { opacity: "1" },
                    },
                    "fadeOut": {
                        from: { opacity: "1" },
                        to: { opacity: "0" },
                    },
                },
                animation: {
                    "accordion-down": "accordion-down 0.2s ease-out",
                    "accordion-up": "accordion-up 0.2s ease-out",
                    "caret-blink": "caret-blink 1.25s ease-out infinite",
                    "scaleIn": "scaleIn 200ms ease",
                    "scaleOut": "scaleOut 200ms ease",
                    "fadeIn": "fadeIn 200ms ease",
                    "fadeOut": "fadeOut 200ms ease",
                    "enterFromLeft": "enterFromLeft 250ms ease",
                    "enterFromRight": "enterFromRight 250ms ease",
                    "exitToLeft": "exitToLeft 250ms ease",
                    "exitToRight": "exitToRight 250ms ease",
                },
                aspectRatio: {
                    poster: "3 / 4",
                },
            },
        },
    }
)