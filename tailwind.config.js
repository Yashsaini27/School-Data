module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        red: { A700: "#da0000" },
        colors: "#ffffffff",
        black: { "900_3f": "#0000003f" },
        light_blue: { A700: "#006dff" },
        blue_gray: {
          50: "#f1f1f1",
          100: "#d1d1d1",
          900: "#142b59",
          "100_01": "#d2d2d2",
        },
        blue: { 900: "#034db0" },
        amber: { A700: "#ffa800" },
        green: { 700: "#2eb300" },
        orange: { 800: "#ee7200" },
        gray: { 500: "#919191", 900: "#252525", "500_01": "#909090" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px -2px  5px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
