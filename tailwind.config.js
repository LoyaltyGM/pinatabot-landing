const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./src/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    plugins: [
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        fontFamily: {
            bungee: ["BungeeShade-Regular", "sans-serif"],
            bebas: ["BebasNeue-Regular", "sans-serif"],
        },

        extend: {
            colors: {
                // primary colors
                pink: "#CB36A6",
                blue: "#616FE8",
                gray: "#CCCCCC",
                darkGray: "E6E6E6",
            },
            fontFamily: {
                'body': ["Inter"],
                "sans": ["Inter"]
            }
        },
    },
};
