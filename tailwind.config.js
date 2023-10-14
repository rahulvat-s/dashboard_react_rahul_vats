/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primarycolor': '#212147', 
        'secondarycolor':'#444472',
      },
      textColor: {
        'primarycolor': '#fea135', 
      },
      borderColor: {
        'primarycolor': '#fea135', 
      },
      screens: {
        'xs': '639px',
        'sm': '812px', 
      },
      maxWidth: {
        'sm': '812px', 
      },
    },
  },
  plugins: [],
}
