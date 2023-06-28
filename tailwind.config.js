/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#036791",
        secondary: "#28a4e5",
        success: "#1b9c7d",
        danger: "#f0ad4e",
        warning: "#ffae00",
        info: "#5bc0de",
        light: "#fff",
        dark: "#333",
        white: "#ffffff",
        black: "#000",
        blue: "#007bff",
      
        indigo: "#6610f2",
        purple: "#6f42c1",
      },
    },
  },
  plugins: [],
};
