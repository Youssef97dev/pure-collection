/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        bg_button: "var(--button)",
        sidebar: "var(--sidebar)",
      },
      fontFamily: {
        arenta: ["arenta", "sans-serif"],
        bonsad: ["bonsad", "sans-serif"],
        femina: ["femina", "sans-serif"],
        lt: ["lt", "sans-serif"],
        tropic: ["tropic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
