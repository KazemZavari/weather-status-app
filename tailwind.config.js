/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1440px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "600px" },
      xs: { max: "0px" },
    },
    fontFamily: {
      sans: ["Kippax", "sans-serif"],
      serif: ["serif"],
    },

    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/images/1.jpg')",
      },
    },
  },
  plugins: [],

};
