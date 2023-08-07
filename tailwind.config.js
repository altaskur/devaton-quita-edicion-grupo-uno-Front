/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./assets/images/banner.png')"
      }
    },
  },
  plugins: [],
}

