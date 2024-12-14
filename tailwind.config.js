/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EEA734',
        'primary-hover': '#D89527',
        'primary-light': '#FFF5E6',
      },
      maxWidth: {
        'mobile': '480px',
      }
    },
  },
  plugins: [],
};