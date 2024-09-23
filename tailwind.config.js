/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'lemonade', 'dim'],
  },
};
