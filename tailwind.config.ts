import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-elements': 'hsl(209, 23%, 22%)', // Dark mode element background
        'very-dark-blue-bg': 'hsl(207, 26%, 17%)', // Dark mode page background
        'very-dark-blue-text': 'hsl(200, 15%, 8%)', // Light mode text color
        'dark-gray-input': 'hsl(0, 0%, 52%)', // Light mode input color
        'very-light-gray-bg': 'hsl(0, 0%, 98%)', // Light mode background color
        'white-text': 'hsl(0, 0%, 100%)', // Text in dark mode and elements in light mode
      },
    },
  },
  plugins: [],
};
export default config;
