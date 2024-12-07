import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./styles/**/*.{css}",
	],
	theme: {
		extend: {
			colors: {
			background: "hsl(var(--background, 0 0% 100%))",
			foreground: "hsl(var(--foreground, 0 0% 0%))",
			card: {
				DEFAULT: "hsl(var(--card, 0 0% 98%))",
				foreground: "hsl(var(--card-foreground, 0 0% 10%))"
			},
			popover: {
				DEFAULT: "hsl(var(--popover, 0 0% 98%))",
				foreground: "hsl(var(--popover-foreground, 0 0% 10%))"
			},
			primary: {
				DEFAULT: "hsl(var(--primary, 220 90% 56%))",
				foreground: "hsl(var(--primary-foreground, 0 0% 100%))"
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary, 220 14% 71%))",
				foreground: "hsl(var(--secondary-foreground, 0 0% 20%))"
			},
			muted: {
				DEFAULT: "hsl(var(--muted, 220 14% 90%))",
				foreground: "hsl(var(--muted-foreground, 0 0% 40%))"
			},
			accent: {
				DEFAULT: "hsl(var(--accent, 340 90% 60%))",
				foreground: "hsl(var(--accent-foreground, 0 0% 100%))"
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive, 0 90% 60%))",
				foreground: "hsl(var(--destructive-foreground, 0 0% 100%))"
			},
			border: "hsl(var(--border, 0 0% 85%))",
			input: "hsl(var(--input, 0 0% 96%))",
			ring: "hsl(var(--ring, 220 90% 56%))",
			chart: {
				1: "hsl(var(--chart-1, 0 100% 50%))",
				2: "hsl(var(--chart-2, 220 90% 50%))",
				3: "hsl(var(--chart-3, 120 90% 50%))",
				4: "hsl(var(--chart-4, 60 90% 50%))",
				5: "hsl(var(--chart-5, 300 90% 50%))"
			}
			},
			borderRadius: {
			lg: "var(--radius, 12px)",
			md: "calc(var(--radius, 12px) - 2px)",
			sm: "calc(var(--radius, 12px) - 4px)"
			}
		}
	},
	plugins: [tailwindcssAnimate]
};

export default config;
