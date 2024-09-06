/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#0B1930",
        primaryColor: "#64FFDA",
        textColor: "#CCD6F6",
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
    },
    screens: {
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      'xs-mx': { 'max': '475px' },
      'sm-mx': { 'max': '639px' },
      'md-mx': { 'max': '767px' },
      'lg-mx': { 'max': '1023px' },
      'xl-mx': { 'max': '1279px' },
      '2xl-mx': { 'max': ' 1535px' },
    },
  },
  plugins: [],
}
