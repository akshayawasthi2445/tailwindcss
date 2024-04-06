/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      // to define your custom colors
      'colors': {
        'primary': '#ee0181',
        'akshay': '#ae3045'
      },
      // to define your fonts
      'fontFamily': {
        'akshay-font': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

