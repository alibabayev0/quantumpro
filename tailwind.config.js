/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "eerie-black": "#15171e",
      "dark-gunmetal": "#19202b",
      "green-yellow": "#a5fc29",
    },
    fontFamily: {
      sans: ["var(--font-proxima)"],
      mono: ["var(--font-montserrat)"],
    },
  },
  plugins: [],
};
