/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        zen: "'Zen Tokyo Zoo', cursive",
      },
    },
  },
  plugins: [],
};
