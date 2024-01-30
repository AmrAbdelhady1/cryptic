import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ecc132",
        lightPrimary: "#f9f7f2",
        blackPrimary: "#282c32",
        darkGray: "#d0d8d7",
        darkRed: "#811f04",
        darkGray50:"rgba(175, 175, 175, .5)",
      },
      fontFamily: {
				inter: ['var(--font-inter)'],
				dmSans: ['var(--font-dmSans)'],
			},
    },
  },
  plugins: [],
};
export default config;
