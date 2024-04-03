/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        'paypalBlue' : {
          200 : "rgba(0, 112, 184,0.2)",
          400 : "#0070b8",
          800 : "#022069"
        }
      }
    },
    
  },
  plugins: [],
}