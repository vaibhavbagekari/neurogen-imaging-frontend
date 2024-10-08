/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        heroImgDark: "url('../src/Assets/heroImg1.avif')",
        heroImgLight: "url('../src/Assets/heroImageLight.jpg')"
      },
      boxShadow: {
        neumorphism:
          "8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255,0.7)",
        neumorphismDark:
           "8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(0, 0,0,0.2)",
      },
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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
}
