const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./**/*.{html, js}"],
    important: true,
    theme: {
        screens: {
            "xs": "314px",
            "sm": "640px",
            // => @media (min-width: 640px) { ... }

            "md": "768px",
            // => @media (min-width: 768px) { ... }

            "lg": "1024px",
            // => @media (min-width: 1024px) { ... }

            "xl": "1200px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1440px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            
            display: ["group-hover"],
            colors: {
                red: {
                    600: "#d0011b",
                },
            },
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
