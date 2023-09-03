const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@frostui/tailwindcss/dist/*.js",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "3rem",
        "2xl": "14rem",
      },
    },

    fontFamily: {
      body: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 1.5s steps(20) infinite alternate, blink .7s infinite",
      },
      colors: {
        primary: colors.blue[600],
      },
    },
  },
  plugins: [
    require("@frostui/tailwindcss/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
