/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      minHeight: {
        content: 'calc(100vh - 8rem)',
      },
    },
  },
  plugins: [],
};
