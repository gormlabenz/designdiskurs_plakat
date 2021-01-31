module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bodoni Moda", "Sans-serif"],
        serif: ["Montserrat", "Sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
