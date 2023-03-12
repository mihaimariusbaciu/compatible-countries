/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray": {
          "alt": "#D4D9DE",
          "72": "#5F5F5F",
        },
        "green": {
          "base": "#00AD09",
        },
        "red": {
          "base": "#FF0000",
        },
        "white": "#FFFFFF",
        "graphite": "#222222",
      },
    },
  },
  plugins: [],
}
