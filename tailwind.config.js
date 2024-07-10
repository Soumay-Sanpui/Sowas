/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bkg: '#1C1E21',
        primary: '#E2FF31',
        bx: '#C4C4C4',
        txt: '#FFFFFF'
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [],
}
