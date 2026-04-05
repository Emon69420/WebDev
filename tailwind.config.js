/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ac4131",
        "on-primary": "#ffffff",
        "primary-container": "#FF7F6A",
        "secondary": "#4a6a6a",
        "background": "#fffbff",
        "surface": "#fdf9f1",
        "on-surface": "#39382f",
        "outline": "#767776",
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Manrope"],
        "label": ["Manrope"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
