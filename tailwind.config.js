/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx. js}"],
  theme: {
    extend: {
      colors: {
        'ed-secondary':'var(--secondary)',
         'black': "var(--primary)",
      
      },
    },
  },
  plugins: [],
}