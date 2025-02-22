import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		fontSize: {
			sm: ["14px", "20px"],
			"base-sm": ["15px", "20px"],
			base: ["16px", "24px"],
			lg: ["18px", "24px"],
			xl: ["24px", "36px"],
			"2xl": ["28px", "36px"],
			"3xl": ["32px", "40px"],
			"4xl": ["40px", "60px"],
			"5xl": ["52px", "65px"],
		},
		extend: {
			colors: {
				green: "#41521F",
				yellow: "#FFF3E3",
				white: "#FFFFFF",
				black: "#000000",
				gray: {
					gray1: "#F4F5F7",
					gray2: "#333333",
					gray3: "#3A3A3A",
					gray4: "#898989",
					gray5: "#D9D9D9",
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
};
export default config;
