import nextConfig from "eslint-config-next";

const eslintConfig = [
	{
		ignores: [
			"node_modules/",
			".next/",
			"dist/",
			"build/",
			".git/",
			"*.min.js",
			"*.min.css",
		],
	},
	...nextConfig,
];

export default eslintConfig;
