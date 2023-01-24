const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#CEE9EB",
      secondary: "#CB80C6",
      "secondary-darker": "#9D4097",
      "dark-grey": "#313035",
      white: colors.white,
      "natural-hair-soc-blue": "#DAEDF2",
      "stripped-sets-purple": "#A1539C",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        crisp: "-4px 4px 0px #313035",
      },
      dropShadow: {
        deep: [
          "0 20px 13px rgb(49, 48, 53, 0.03)",
          "0 20px 13px rgb(49, 48, 53, 0.08)",
        ],
      },
      transitionTimingFunction: {
        "icon-in-out": "cubic-bezier(0.6, 0.05, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
