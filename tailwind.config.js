/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        primary:["Inter", 'sans-serif'],
        secondery:["Instrument Serif", 'serif']
      },
      colors:{
        themeNav : "#040404",
        textColor : "#FAFAFA"
      }
    },
  },
  plugins: [],
}

