/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#bfa888",
        secondary: "#f4f2ed",
        "primary-100": "#ffedd4",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
