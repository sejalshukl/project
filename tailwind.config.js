/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        redprimary: 'db393c', // Replace with the blue color code you prefer
      },
    },
  },
  plugins: [],
}

