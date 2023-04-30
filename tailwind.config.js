const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['"Roboto Slab"', 'serif']
    },
    colors: {
      ...colors,
      'bgdark': '#1A1A1A',
      'bgmdark': '#282828',
      'greenyellow': '#FFFD01',
      'fontGray': '#3E3D3D',
      'btnGrayLight': '#2F2F2F',
      'btnGrayDark': '#1A1A1A',
      'bglight': '#F2F5FA',
      'bgmlight': '#FFFFFF',
      'btnBlue': '#1A74E4',


    },

  },
  plugins: [require("daisyui")],
}