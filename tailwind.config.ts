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
        // Updated to "MTN Industrial" Palette
        'waps-yellow': '#FFCC00', // The Authority Color
        'waps-black': '#000000',  // Pure Black
        'waps-dark': '#111111',   // Off-black for footer/cards
        'waps-white': '#ffffff',
        'waps-gray': '#9CA3AF',   // Lighter gray for better contrast on black
        'waps-dark-gray': '#333333', // Border colors
      },
    },
  },
  plugins: [],
};
export default config;