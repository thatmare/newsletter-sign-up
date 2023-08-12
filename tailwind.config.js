/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-bold': ['Roboto-bold'],
        'roboto-regular': ['Roboto-regular'],
      }
    },
  },
  plugins: [],
}

