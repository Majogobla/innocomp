/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx', './index.html', 
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};