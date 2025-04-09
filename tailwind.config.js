/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60B5FF',
        accent: '#FF9149',
        secondary: '#AFDDFF',
        background: '#FFECDB'
      }
    },
  },
  plugins: [],
}