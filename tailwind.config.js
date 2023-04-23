/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './screens/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins')
}

