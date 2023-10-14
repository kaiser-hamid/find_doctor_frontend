const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@frostui/tailwindcss/dist/*.js",
  ],
  purge: {
    options: {
      safelist: [
        "bg-cyan-500",
        "bg-blue-500",
        "bg-orange-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-purple-500",
        "bg-amber-500",
        "bg-lime-500",
        "bg-indigo-500",
        "bg-emerald-500",
      ],
    },
  },
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
        primary: colors.teal[500],
      },
    },
  },
  plugins: [
    require("@frostui/tailwindcss/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
