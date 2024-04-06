/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
      fontFamily: {
        "Red-Hat": ["Red Hat Display", "sans-serif"],
      },
      boxShadow: {
        outerBox:
          "hsl(224,100%,94%) 0px 2px 1px, hsl(224,100%,94%) 0px 4px 2px, hsl(224,100%,94%) 0px 8px 4px, hsl(224,100%,94%) 0px 16px 8px, hsl(224,100%,94%) 0px 32px 16px",
      },
    },
  },
  plugins: [],
};
