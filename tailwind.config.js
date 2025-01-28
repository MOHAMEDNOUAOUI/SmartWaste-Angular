/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#3e6626",
        secondary:"#1b2812",
        lightgreen:"#87c15c"
      },
      fontFamily:{
        IBM:['IBM Plex Mono'],
        Roboto:['Roboto']
      }
    },
  },
  plugins: [],
}

