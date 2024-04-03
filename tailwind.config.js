/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					lightRed: "hsl(356, 100%, 66%)",
					veryLightRed: "hsl(355, 100%, 74%)",
					veryDarkBlue: "hsl(208, 49%, 24%)",
				},
				neutral: {
					white: "hsl(0, 0%, 100%)",
					grayishBlue: "hsl(240, 2%, 79%)",
					veryDarkGrayishBlue: "hsl(207, 13%, 34%)",
					veryDarkBlackBlue: "hsl(240, 10%, 16%)",
				},
				gradient: {
					veryLightRed: "hsl(13, 100%, 72%)",
					lightRed: "hsl(353, 100%, 62%)",
					veryDarkGrayBlue: "hsl(237, 17%, 21%)",
					veryDarkDesaturatedBlue: "hsl(237, 23%, 32%)",
				},
			},
			fontFamily: {
				overpass: ["Overpass", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
			},
		},
	},
	plugins: [],
};

/* 
## Colors

### Primary

- Light red (CTA text): hsl(356, 100%, 66%)
- Very light red (CTA hover background): hsl(355, 100%, 74%)
- Very dark blue (headings): hsl(208, 49%, 24%)

### Neutral

- White (text): hsl(0, 0%, 100%)
- Grayish blue (footer text): hsl(240, 2%, 79%)
- Very dark grayish blue (body copy): hsl(207, 13%, 34%)
- Very dark black blue (footer background): hsl(240, 10%, 16%)

### Gradient

Background gradient - Intro/CTA mobile nav:

- Very light red: hsl(13, 100%, 72%)
- Light red: hsl(353, 100%, 62%)

Background gradient - body:

- Very dark gray blue: hsl(237, 17%, 21%)
- Very dark desaturated blue: hsl(237, 23%, 32%)

- Font size: 16px
*/
