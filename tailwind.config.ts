import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				shimmer: 'shimmer 2s linear infinite',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
			},
			keyframes: {
				shimmer: {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				}
			}
		},
		fontFamily: {
			lato: [
				'var(--lato-font)',
				'ui-sans-serif',
				'system-ui'
			],
			roboto: [
				'Roboto',
				'ui-sans-serif',
				'system-ui'
			]
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('tailwindcss-dotted-background'),
	],
} satisfies Config;
