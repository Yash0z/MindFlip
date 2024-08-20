/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         xs: "375px",
         sm: "420px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         xxl: "1400px",
      },
      extend: {
         fontFamily: {
            Euclid_re: ['Euclid_re'],
            ClashGrotex: ['ClashGrotex'],
            Satoshi_re: ['Satoshi_re'],
            Satoshi_bk: ['Satoshi_Bk'],
            Manrope_re: ['Manrope_re'],
            Helvetica_re: ['Helvetica_re']
         },
         colors: {
            black: 'rgba(var(--black))',
            white: 'rgba(var(--white))',
            purple: 'rgba(var(--purple))',
            green: 'rgba(var(--green))',
            red: 'rgba(var(--red))',
            yellow: 'rgba(var(--yellow))',
            blue: 'rgba(var(--blue))',
            orange: 'rgba(var(--orange))',
         },
         typoraphy: {
            DEFAULT: {
               css: {
                  "*": {

                     margin: 0,
                     padding: 0,
                     listStyle: "none",
                     boxSizing: "border-box",
                     textDecoration: "none",
                     fontFamily: "Questrial",
                     color: "inherit",
                  },
               },
            },
         },
      },
   },
   plugins: [],
}

