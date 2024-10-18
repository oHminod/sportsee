/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        darkGrey: "#282D30",
        lightGrey: "#FBFBFB",
        legendGrey: "#9B9EAC",
        red: "#FF0000",
        primary: "#E60000",
      },
      fontSize: {
        legendTitle: ["26px", "26px"],
        legend: ["16px", "26px"],
      },
      boxShadow: {
        header: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
