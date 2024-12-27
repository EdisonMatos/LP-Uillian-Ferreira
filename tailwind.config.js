/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#DBB14C",
      secondary: "#000000",
      bgSectionLight: "#FFFFFF",
      bgSectionDark: "#252329",
      links: "#0189BB",
      buttonColor: "#DBB14C",
      lighter: "#FFFFFF",
      darker: "#000000",
    },
    boxShadow: {
      "custom-opacity": "-20px 20px 0px", // 30% de opacidade
    },
    fontFamily: {
      mainFont: ["Poppins", "sans-serif"],
      secondFont: ["Poppins", "sans-serif"],
      league: ["League Gothic"],
      barlow: ["Barlow Condensed"],
    },
    fontSize: {
      paragraph1: "0.625rem",
      paragraph2: "0.75rem",
      paragraph3: "0.875rem",
      paragraph4: "1rem",
      paragraph5: "1.125rem",
      title1: "1.25rem",
      title2: "1.375rem",
      title3: "1.5rem",
      title4: "1.875rem",
      title5: "2.25rem",
      title6: "3rem",
      title7: "3.5rem", // 55px
    },
    spacing: {
      112: "28rem",
      120: "30rem",
      128: "32rem",
    },
    screens: {
      phone1: "320px",
      phone2: "375px",
      phone3: "425px",
      tablet1: "640px",
      tablet2: "768px",
      desktop1: "1024px",
      desktop2: "1280px",
      desktop3: "1440px",
    },
    keyframes: {
      slideDown: {
        "0%": { transform: "translateY(-5%)", opacity: "0" },
        "100%": { transform: "translateY(0%)", opacity: "1" },
      },
      slideUp: {
        "0%": { transform: "translateY(0%)", opacity: "1" },
        "100%": { transform: "translateY(-5%)", opacity: "0" },
      },
    },
    animation: {
      "slide-down": "slideDown 1s ease",
      "slide-up": "slideUp 1s ease",
    },
  },
};
// export const plugins = [require("tailwindcss-gradients")];
