/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        roseSoft: "#B68785",   // rosado tierra
        brownDeep: "#693E35",  // marrón
        pinkBright: "#CB4E71", // fucsia floral
        graySoft: "#A9B3B1",   // gris suave
        oliveSpring: "#9BA04E" // verde oliva
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },

    },
  },
  plugins: [],
};
