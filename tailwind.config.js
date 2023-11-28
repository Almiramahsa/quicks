/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",

  ],
  theme: {
    extend: {
      colors:{
        'quicks-primary-blue': '#2F80ED',
        'quicks-primary-black': '#4F4F4F',
        'quicks-primary-grey': '#828282',
        'quicks-primary-white': '#E0E0E0',

        'quicks-indicator-orange': '#F8B76B',
        'quicks-indicator-purple': '#8785FF',
        'quicks-indicator-red': '#EB5757',
        'quicks-indicator-yellow': '#F2C94C',

        
        'quicks-chats-orange': '#E5A443',
        'quicks-chats-orange-light': '#FCEED3',
        'quicks-chats-purple': '#9B51E0',
        'quicks-chats-purple-light': '#EEDCFF',
        'quicks-chats-green': '#43B78D',
        'quicks-chats-green-light': '#D2F2EA',


        'quicks-stickers-white': '#E9F3FF',
        'quicks-stickers-orange': '#FDCFA4',
        'quicks-stickers-yellow': '#F9E9c3',        
        'quicks-stickers-lime': '#CBF1C2',
        'quicks-stickers-green': '#AFEBDB',
        'quicks-stickers-purple': '#CFCEF9',
        'quicks-stickers-pink': '#F9E0FD',

      },
      fontFamily:{
        lato_regular: ['Lato-Regular'],
        lato_bold: ['Lato-Bold'],
      },
      fontSize:{
        sm: ['12px'],
        base: ['14px'],
        md: ['16px'],
      }
    },
  },
  plugins: [],
}