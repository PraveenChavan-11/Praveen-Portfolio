/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode variant

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example font family; replace with your choice
        heading: ['Montserrat', 'sans-serif'],
        handwriting: ['Tangerine', 'Tangerine'], // Font family for headings
        // Add more font families as needed
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Example shadow; customize as per your preference
        // Define other custom box shadows
      },
      colors: {
        "primary": "#5E3BEE",
        "headingcolor": "#F5F5F5", // Change to a lighter color for better contrast
        "bgShade": "#1C1E25", // Darker background shade
        "dribble": "#FF3366", // Adjusted color for better visibility in dark mode
        "body": "#F5F5F5", // Lighter text color for contrast
      },
      // Update other theme values for dark mode, for example:
      // fontSize, letterSpacing, lineHeight, etc.
    },
  },
  plugins: [],
}
