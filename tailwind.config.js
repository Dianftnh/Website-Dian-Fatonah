/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#A94468',
        'primary-dark': '#853651',
        'primary-soft': '#F6E8ED',
        background: '#FBF9F7',
        'soft-surface': '#F7F0EE',
        border: '#EAE2DF',
        'text-primary': '#29252A',
        'text-secondary': '#6E666C',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      screens: {
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
