/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },

}
