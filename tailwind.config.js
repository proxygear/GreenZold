const colors = require('tailwindcss/colors')
const path = require('path');

module.exports = {
  purge: {
    enabled: true,
    content: [
      path.join(__dirname, './source/**/*.html'),
      path.join(__dirname, './source/**/*.md'),
      path.join(__dirname, './source/**/*.html.erb')
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
