/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Add the paths to all of your template files
  theme: {
    extend: {
      colors: {
        primary: "#bfa888",
        darkBlue: "#021527",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Cormorant Upright", "serif"],
        monospace: ["Inconsolata", "monospace"],
      },
      backgroundImage: {
        "mid-banner": "url('./src/assets/bg-banner.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
