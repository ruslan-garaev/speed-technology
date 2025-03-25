module.exports = {
  content: [
    './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js'
  ],
  darkMode: "class",
  theme: {
    boxShadow: {
      'sm': 'var(--shadow-sm)',
      DEFAULT: 'var(--shadow)',
      'md': 'var(--shadow-md)'
    },
    extend: {
      fontFamily: {
        sans: ['Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'],
      },
      colors: {
        'primary': {
          DEFAULT: 'var(--primary-color)',
          'light': 'var(--primary-color-light)',
          'dark': 'var(--primary-color-dark)',
        },
        'success': {
          DEFAULT: 'var(--success-color)',
          'light': 'var(--success-color-light)',
          'dark': 'var(--success-color-dark)',
        },
        'danger': {
          DEFAULT: 'var(--danger-color)',
          'light': 'var(--danger-color-light)',
          'dark': 'var(--danger-color-dark)',
        },
        'warning': {
          DEFAULT: 'var(--warning-color)',
          'light': 'var(--warning-color-light)',
          'dark': 'var(--warning-color-dark)',
        },
        'neutral': {
          '50': 'var(--neutral-50)',
          '75': 'var(--neutral-75)',
          '100': 'var(--neutral-100)',
        },
        'light': 'var(--light-color)',
        'dark': 'var(--dark-color)',
        'muted': 'var(--muted-color)',
        'title': 'var(--title-color)',
        'body': 'var(--body-color)',
        'secondary': 'var(--secondary-color)',
        'label': 'var(--label-color)',
        'telegram': 'var(--telegram-color)',
        'whatsapp': 'var(--whatsapp-color)'
      },
      fontSize: {
        '2xs': 'var(--font-size-2xs)',
      },
      borderWidth: {
        '12': '12px',
      },
      // columns: {
      //   13: "13",
      //   14: "14",
      // },
      customForms: theme => ({
        default: {
          checkbox: {
            '&:indeterminate': {
              background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'8\' height=\'2\' x=\'4\' y=\'7\' rx=\'1\'/%3E%3C/svg%3E");',
              borderColor: 'transparent',
              backgroundColor: 'currentColor',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          }
        }
      })
    },
  },
  // variants: {
  //   columns: ["responsive"],
  // },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require('preline/plugin')
  ],
};
