/** @type {import('tailwindcss').Config} */
import * as AspectRatio from '@tailwindcss/aspect-ratio';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				gruppo: ['Gruppo']
			}
		}
	},
	plugins: [AspectRatio]
};
