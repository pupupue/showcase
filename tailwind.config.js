/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'brown': '#423232',
        'gray': '#C2C2C2',
        'lightDarker': '#ececec',
        'lightGreen': '#09821D',
        'darkGreen': '#055612',
        'light': '#F4F4F4'
      },
      fontFamily: {

        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },

    },
  },
  plugins: [],
}
