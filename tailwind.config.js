const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./**/*.{html, js}"],
    important: true,
    theme: {
        extend: {
            display: ["group-hover"],            
        },

        fontSize: {
            least: ["10px", "12px"],
            xs: ["12px", "20px"],
            md: ["13px", "18px"],
            base: ["14px", "22px"],
            lg: ["18px", "28px"],
            xl: ["20px", "32px"],
            ...defaultTheme.fontSize,
        },
         
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
