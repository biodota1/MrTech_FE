/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23e400",
        "btn-primary": "#23e400",
        "neon-white": "#f3f6f4",
      },
      boxShadow: {
        "3xl": "-20px 30px 60px -2px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
