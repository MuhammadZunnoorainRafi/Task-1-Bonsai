/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00b289',
        secondary: '#4c4d5f',
      },
    },
  },
  plugins: [require('daisyui', 'flowbite/plugin')],
};
