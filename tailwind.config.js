/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				space: ['Space Mono', 'monospace'],
				ubuntu: ['Ubuntu Mono', 'monospace'],
			},
			colors: {
				'deep-blue': '#152238',
				'deep-grey': '#ffffffde',
			},
		},
	},
	plugins: [],
}
