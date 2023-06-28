/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx', './index.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};