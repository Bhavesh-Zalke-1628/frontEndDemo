/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-25': '#f5f9ff',
        'gray-25': '#fcfcfc',
        'green-25': '#f5fffa',
        'indigo-25': '#f5f7ff'
      }
    },
  },
  plugins: [],
}