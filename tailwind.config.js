const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'primary': '#2B673B',
      'secondary': '#F8EE53',
      'tertiary': '#56CD75',
      'brown': '#582f0e',
      'secondary-800': '#de9e36',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}