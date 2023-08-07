/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fill: {
      gray: ({ theme }) => theme('colors.gray')
    },
    extend: {
      backgroundImage: {
        'banner': "url('./assets/images/banner.png')"
      }
    },
    colors: {
      primary: colors.orange,
      ...colors
    }
  },
  plugins: [],
}

