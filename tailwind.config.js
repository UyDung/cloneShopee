const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./**/*.{html, js}"],
    theme: {
        extend: {},
        screens: {
            xs: "320px",
            ...defaultTheme.screens,
        },
    },
    plugins: [],
};
