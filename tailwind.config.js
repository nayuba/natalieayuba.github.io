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
      white: colors.white,
      transparent: "transparent",
      current: "currentColor",
      primary: "#CEE9EB",
      secondary: "#CB80C6",
      "secondary-dark": "#9D4097",
      "secondary-darker": "#4F204C",
      "secondary-alpha-60": "rgba(203, 128, 198, 0.6)",
      "dark-grey": "#222",
      "natural-hair-soc-blue": "#DAEDF2",
      "stripped-sets-purple": "#A1539C",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "banner-breakpoint": "1260px",
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
        "slow-in-out": "cubic-bezier(0.6, 0.05, 0.3, 1)",
      },
      content: {
        straight: "url('/underlines/straight.svg')",
        "less-straight": "url('/underlines/less-straight.svg')",
        wonky: "url('/underlines/wonky.svg')",
        "very-wonky": "url('/underlines/very-wonky.svg')",
      },
    },
  },
  plugins: [],
};
