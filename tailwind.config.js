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
        primary: '#E56B9A',
        'primary-dark': '#CC4E80',
        'primary-soft': '#FCE7EF',
        background: '#FFFFFF',
        'soft-surface': '#FFF9FB',
        border: '#E9E4E6',
        'text-primary': '#17171A',
        'text-secondary': '#68656A',
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
