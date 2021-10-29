module.exports = {
  mode: "jit",
  purge: ["./src/*.{html,js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["'Red Hat Display'", "sans-serif"],
      },
      colors: {
        blue: {
          verypale: "hsl(225 100% 98%)",
          pale: "hsl(225, 100%, 94%)",
          bright: "hsl(245, 75%, 52%)",
          desaturated: "hsl(224, 23%, 55%)",
          dark: "hsl(223, 47%, 23%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
