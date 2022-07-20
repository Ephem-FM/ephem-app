/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      main: ['Karrik', 'sans-serif'],
      mono: ['Mister Pixel', 'monospace'],
      weird: ['Mister Pixel Tools', 'monospace'],
    },
    transitionDuration: {
      fast: '400ms',
      regular: '500ms',
      slower: '650ms',
      slow: '1s',
    },

    extend: {
      colors: {
        red: '#F41404',
        yellow: '#FFEB2F',
        grey: '#DFD6DB',
      },
      keyframes: {
        typing: {
          '0%': { width: '0px' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typing: 'typing 2s steps(25, end) forwards',
      },
      boxShadow: {
        'red-glow': '-2px 4px 1px #F41404',
        'red-glow-lg': '-4px 6px 2px #F41404',
        'yellow-glow': '-2px 4px 1px #FFEB2F;',
        'yellow-glow-lg': '-4px 6px 2px #FFEB2F;',
      },
    },
  },
  plugins: [],
}
