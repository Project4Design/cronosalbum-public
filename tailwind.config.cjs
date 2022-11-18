/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cronos: {
          DEFAULT: '#8a1538',
          light: '#8a1538',
          dark: '#7E2139',
          darker: '#571e2f',
        },
        qatar: {
          DEFAULT: '#61ACA3',
          light: '#00cfb7',
        },
        bone: {
          300: '#EDEDE5',
          700: '#95957A',
        },
      },
      fontFamily: {
        arabic: ['QatarArabic', 'Helvetica', 'Arial'],
      },
      maxWidth: {
        '8xl': '80rem',
      },
      dropShadow: {
        solid: '3px 3px 0px rgba(0,0,0,.3)',
        'solid-lg': '5px 5px 0px rgba(0,0,0,.3)',
        'cronos-lg': '3px 3px 0px rgba(138, 21, 56, 1)',
      },
      backgroundImage: {
        'waves-gradient':
          'radial-gradient(circle at top left,#ffffff00 2%,#ffffff55 5%,#ffffff00 5%,#ffffff00 8%,#ffffff55 10%,#ffffff00 10%,#ffffff00 13%,#ffffff55 15%,#ffffff00 15%,#ffffff00 18%,#ffffff55 20%,#ffffff00 20%,#ffffff00 23%,#ffffff55 25%,#ffffff00 25%),linear-gradient(170deg, var(--tw-gradient-from) 60%, var(--tw-gradient-to));',
      },
    },
  },
  plugins: [],
};
