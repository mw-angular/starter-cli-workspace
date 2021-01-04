const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: 'tw-',
  purge: [
    `libs/design-system/src/**/*.html`,
    `libs/design-system/src/**/*.component.ts`
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
