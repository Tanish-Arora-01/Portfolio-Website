/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900 (Background)
        secondary: "#1e293b", // Slate 800 (Cards)
        accent: "#38bdf8", // Sky 400 (Highlights for DevOps/React)
        text: "#f8fafc", // Slate 50 (Text)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
