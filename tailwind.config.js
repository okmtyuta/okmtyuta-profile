/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'theme-color-primary': '#973c3f',
      gray: '#e7e7eb'
    },
    fontFamily: {
      frederica: ['Fredericka the Great', 'cursive'],
      anton: ['Anton', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
