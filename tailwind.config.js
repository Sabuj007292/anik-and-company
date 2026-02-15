/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B1E2D',   // Your maroon
        accent: '#00A8C6',    // Cyan
        lightbg: '#F8FAFC'
      },
    },
  },
  plugins: [],
}
