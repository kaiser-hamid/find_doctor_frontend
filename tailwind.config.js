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
