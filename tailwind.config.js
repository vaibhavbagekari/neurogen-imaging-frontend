/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffbd59', 
          dark: '#ffffff', 
        },
        secondary: {
          light: '#FBBF24', // Light theme secondary color (e.g., yellow-400)
          dark: '#D97706',  // Dark theme secondary color (e.g., yellow-700)
        },
        background: {
          light: '#F9FAFB', // Light theme background color (e.g., gray-50)
          dark: '#1F2937',  // Dark theme background color (e.g., gray-800)
        },
        text: {
          light: '#111827', // Light theme text color (e.g., gray-900)
          dark: '#D1D5DB',  // Dark theme text color (e.g., gray-300)
        }
      },
    },
  },
  plugins: [],
}
