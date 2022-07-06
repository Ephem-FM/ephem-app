/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Helvetica', 'sans-serif'],
      'mono': ['monospace'],
    },
    extend: {
      colors: {
        'red': '#F41404',
        'yellow': '#FFEB2F',
        'grey': '#DFD6DB',
      },
    },
  },
  plugins: [],
}
