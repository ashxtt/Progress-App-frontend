/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    
    colors: {
      'black': '#141414',
      'green': '#3fffa3',
      'white': '#FFFFFF',
      'dark': '#000000',
    },
  },
  
  
  extend: {
    fontFamily: {
      'quicksand': 'Quicksand'
    }
  },
  plugins: [],
}
