/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      "2xs":10,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 40,
    },
    colors: {
      transparent : 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      gray: {
        900: '#121214',
        800: '#202024',
        700: '#323238',
        400: '#7C7C8A',
        300: '#8D8D99',
        200: '#C4C34CC',
        100: '#E1E1E6',
      },

      green: {
        600: '#00875F',
        500: '#00B37E',
      },

      red:{
        400: "#F75A68"
      }

    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    
    },
  },
  plugins: [],
}