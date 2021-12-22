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
            least: ["10px", "12px"],
            xs: ["12px", "20px"],
            md: ["13px", "18px"],
            base: ["14px", "22px"],
            lg: ["18px", "28px"],
            xl: ["20px", "32px"],
        },
        
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
