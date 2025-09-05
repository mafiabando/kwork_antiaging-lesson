/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-50': '#FCE9E9',
        'purple-50': '#E8E4F8',
        'emerald-500': '#4BBE91',
        'emerald-600': '#3DA17C',
        'gold-500': '#F5C26B',
        'gray-800': '#2D2D2D',
      },
    },
  },
  plugins: [],
}