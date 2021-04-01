const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    './app/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
  ],
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
