/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Add the paths to all of your template files
  theme: {
    extend: {
      colors: {
        primary: "#bfa888",
        "darkBlue-600": "#021527",
        "darkBlue-400": "#002243",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Cormorant Upright", "serif"],
        monospace: ["Inconsolata", "monospace"],
      },
      backgroundImage: {
        "midBanner-01": "url('./src/assets/bg-banner-01.jpg')",
        "midBanner-02": "url('./src/assets/bg-banner-02.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
