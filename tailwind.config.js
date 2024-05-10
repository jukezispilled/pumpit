/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          custom: ['CustomFont', 'sans-serif'], // Replace 'FontName' with your actual font name
      },
    },
  },
  plugins: [],
}

