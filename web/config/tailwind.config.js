/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      main: ['Helvetica', 'sans-serif'],
      mono: ['monospace'],
    },
    extend: {
      colors: {
        red: '#F41404',
        yellow: '#FFEB2F',
        grey: '#DFD6DB',
      },
      boxShadow: {
        'red-glow': '2px 2px 10px #F41404',
        'yellow-glow': '2px 2px 10px #FFEB2F;',
        'yellow-glow-lg': '2px 2px 30px #FFEB2F;',
      },
    },
  },
  plugins: [],
}
