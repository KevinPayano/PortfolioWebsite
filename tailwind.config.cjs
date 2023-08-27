const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			cursor: {
				default: 'url(assets/CursorIcon.png), default',
				auto: 'url(assets/CursorIcon.png), auto',
				pointer: 'url(assets/PointerIcon.png), pointer',
			  },

			fontFamily: {
				IBMPlexMono: ["IBM Plex Mono", "mono"],
				IBMPlexSans: ["IBM Plex Sans", "sans"],
			},
		
			animation: {
				contactGrad: "contactGrad 7s infinite",
				'spin-slow': 'spin 5s linear infinite',
			},
		
			keyframes: {
				contactGrad: {
					"0%": {
						transform: "translate(0px, 0px) scale(2)",
					},
					"33%": {
						transform: "translate(20px, -32px) scale(2.1)",
					},
					"66%": {
						transform: "translate(24px, 0px) scale(1.8)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(2)",
					}
				}
			},
	
		},
	  },
	  plugins: [],
}
