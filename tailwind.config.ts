import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // WAPS Digital Brand Colors
        'waps-yellow': '#ffca00',
        'waps-black': '#000000',
        'waps-white': '#ffffff',
        'waps-gray': '#60606e',
        'waps-dark-gray': '#3c3c3c',
      },
    },
  },
  plugins: [],
};
export default config;