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
      keyframes: {
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        dash: {
          "0%": { strokeDasharray: "1, 200", strokeDashoffset: "0" },
          "50%": { strokeDasharray: "89, 200", strokeDashoffset: "-35px" },
          "100%": { strokeDasharray: "89, 200", strokeDashoffset: "-124px" },
        },
      },
      animation: {
        spinner: "spinner 1.5s linear infinite",
        dash: "dash 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
