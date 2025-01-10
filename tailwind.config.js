/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9100',
          light: '#FFB649',
          dark: '#E68200',
        },
        dark: {
          DEFAULT: '#2A2A2A',
          secondary: '#363636',
        },
        light: {
          DEFAULT: '#E0E0E0',
          secondary: '#B0B0B0',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Marcellus', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};