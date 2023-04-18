/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              "scroll-margin-top": "56px",
            },
            h3: {
              "scroll-margin-top": "56px",
            },
          },
        },
      },
      fontFamily: {
        sans: ["Pretendard", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
