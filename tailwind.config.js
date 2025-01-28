/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Oswal_dSerif: ['Oswald', 'serif'],
        Fira_Serif: ['Fira Sans', 'serif'],
        Blinker_Serif: ['Blinker', 'serif'],
        Nd_Loogos: ['ND LOGOS', 'sans-serif'],
        Ifont: ['SF Pro Display'],
        IfontText: ['SF Pro Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
