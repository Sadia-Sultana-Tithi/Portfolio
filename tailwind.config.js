/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: { 
      monstserrat: ["Montserrat", "sans-serif"], 
      inter: ["Inter", "sans-serif"], 
      primary: ["Open Sans", "sans-serif"] },
    extend: {
      colors: {
        'primary': '#0872BF',
        'background': '#141A1A'
      }
    },
  },
  plugins: [],
}