/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        decimalZero: "decimal-leading-zero",
      },
      backgroundImage: {
        Penghargaan: "url('./src/assets/penghargaan_background.png')",
        Quote: "url('./src/assets/quote_background.png')",
        Consultation: "url('./src/assets/consultation_background.png')",
        Profile_Hero: "url('./src/assets/profile_hero_background.png')",
        Aboutus_Hero: "url('./src/assets/about_us_hero_background.png')",
      },
      colors: {
        "bg-white": "#F6FAFF",
        blue: "#0B2A44",
        "text-color": "#252B42",
        "second-text-color": "#737373",
        yellow: "#D1B06B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "Cormorant-Garamond": ["Cormorant Garamond"],
        Inter: ["Inter"],
        Martel: ["Martel"],
        "Open-Sans": ["Open Sans"],
        Outfit: ["Outfit"],
      },
      fontSize: {
        h1: [
          "4.0625rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h2: [
          "4.0625rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h3: [
          "2.8125rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h4: [
          "2.5rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h5: [
          "2.1875rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h6: [
          "1.875rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [scrollbarHide],
};

