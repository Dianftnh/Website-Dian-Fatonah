/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', './src/**/*.{html,js}'],
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
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xl': '1200px',
      },
      backgroundImage: {
        'hero': "url('/Background.png')",
      },
    },
  },
  plugins: [],
}
