/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#8A1817',
			},
			fontFamily: {
				afacadflux: ["Afacad Flux", "sans-serif"],
			  },
		},
	},
	plugins: [],
}
