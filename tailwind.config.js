/** @type {import('tailwindcss').Config} */
export default {
  // CONFIGURAÇÕES DO TAILWIND
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  // FONTES CUSTOMIZADAS
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  
  plugins: [],
}