/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../Results.html"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".shadow-amin": {
          boxShadow: "2px 0px 20px 1px  rgb(190, 208, 224)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
