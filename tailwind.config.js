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
        primary: '#34495e',
        secondary: '#64748b',
        dark: '#0f172a',
        navy: '#304050',
        accent: '#6070b0',
        'accent-dark': '#4d5c94',
        lavender: {
          50: '#dcdce9',
          100: '#c9c9db',
          200: '#b6b6cc',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
