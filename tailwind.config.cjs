/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#305790",
        secondary: "#42B0DB",
        light: "#f8fbfc",
      },
      fontFamily: {
        'sans': ['Tajawal', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'below-sm': {
            'max': '319px',
        },
        'below-md': {
            'max': '639px',
        },
        'below-lg': {
            'max': '767px',
        },
        'below-xl': {
            'max': '1023px',
        },
        'below-2xl': {
            'max': '1279px',
        },
        'ranged-sm': {
            'min': '320px',
            'max': '639px',
        },
        'ranged-md': {
            'min': '640px',
            'max': '767px',
        },
        'ranged-lg': {
            'min': '768px',
            'max': '1023px',
        },
        'ranged-xl': {
            'min': '1024px',
            'max': '1279px',
        },
        'ranged-2xl': {
            'min': '1280px',
            'max': '1535px',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
