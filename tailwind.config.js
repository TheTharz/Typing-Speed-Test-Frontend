/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      default: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        yellow: '#E2B714',
        lightgray: '#646669',
        darkgray: '#2C2E31',
        darkbackground: '#323437',
        border: '#282828',
      },
    },
  },
  plugins: [],
};
