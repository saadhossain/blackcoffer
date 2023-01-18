/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#3B269B",
        "secondary": "#7A30DD",
        "bgColor" : "#122033",
        "boxColor": "#161744"
      }
    },
  },
  plugins: [],
}