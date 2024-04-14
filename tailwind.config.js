const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    plugins: [],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        fontFamily: {
            bebas: ["BebasNeue-Regular", "sans-serif"],
            onest: ["Onest-Regular", "sans-serif"],
            onestMedium: ["Onest-Medium", "sans-serif"],
        },

        extend: {
            colors: {
                // primary colors
                blue: "#012D68",
                blueLight: "#61B8FF",
                pink: "#CB36A6",
                darkPink: "#FF70A9",
                lightPink: "#FFADCE",
                darkBlue: "#012D68",
                white: "#FFFBFD",
                gray: "#CCCCCC",
                darkGray: "#E6E6E6",
                lightPurple: "#BD9DF5",
                darkPurple: "#5F42C7",
                darkGreen: "#82B937",
            },
            fontFamily: {
                body: ["Inter"],
                sans: ["Inter"],
            },
        },
    },
};
