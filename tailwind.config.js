const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            strong: theme('colors.gray.200'),
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            h5: {
              color: theme('colors.white'),
            },
            h6: {
              color: theme('colors.white'),
            },
            'ol > li::before': {
              color: theme('colors.white'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.white'),
            },
            'figure figcaption': {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.200'),
            },
            thead: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.gray.700'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.800'),
            },
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: '#F07651',
              },
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        56: '14rem',
        72: '18rem',
        96: '24rem',
      },
      colors: {
        gray: colors.trueGray,
        ruler: '#F07651',
      },
    },
  },
  variants: {
    scrollSnapType: ['responsive'],
    extend: {
      ringWidth: ['hover'],
      scale: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-scroll-snap'),
  ],
};
