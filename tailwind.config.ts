import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				light: {
					1: "FFFFFF",
					2: "#F4F5F7",
				},
				dark: {
					2: "#262626",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground:
						"hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground:
						"hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground:
						"hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground:
						"hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground:
						"hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground:
						"hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground:
						"hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			backgroundImage: {
				Image: "url('/png/sssurf1.svg')",
				SignImage: "url('/images/media.png')",
				bgImg: "url('/images/bgGr.svg')",
				bgWhite: "url('/images/whitebg.svg')",
				categoryImage:
					"url('/images/computer.jpg')",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: { height: "0" },
				},
				shimmer: {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: {
						transform:
							"translateX(calc(-100% - var(--gap)))",
					},
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: {
						transform:
							"translateY(calc(-100% - var(--gap)))",
					},
				},
			},
			animation: {
				"accordion-down":
					"accordion-down 0.2s ease-out",
				"accordion-up":
					"accordion-up 0.2s ease-out",
				shimmer: "shimmer 2s linear infinite",
				marquee:
					"marquee var(--duration) linear infinite",
				"marquee-vertical":
					"marquee-vertical var(--duration) linear infinite",
			},
		},
	},

	plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors,
	],
} satisfies Config;

export default withUt(config);

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [
			`--${key}`,
			val,
		]),
	);

	addBase({
		":root": newVars,
	});
}
