const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./**/*.{html, js}"],
    theme: {
        extend: {},
        screens: {
            xs: "320px",
            ...defaultTheme.screens,
        },
        fontSize: {
            xs: ['12px', '20px'],
            base: ['14px', '22px'],
            lg: ['18px', '28px'],
            xl: ['20px', '32px']
        }
    },
    plugins: [],
};
