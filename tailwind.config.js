/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          index: "#D87D4A",
          hover: "#fbaf85",
        },
        "charcoal-gray": "#101010",
        "off-white": "#F1F1F1",
        "neutral-white": "#FAFAFA",
        error: "#CD2C2C"
      },
    },
  },
  plugins: [],
};
