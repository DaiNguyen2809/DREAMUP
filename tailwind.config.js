/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                gilroy_thin: ["gilroy-thin", "sans-serif"],
                gilroy_thin_italic: ["gilroy-thin-italic", "sans-serif"],
                gilroy: ["gilroy", "sans-serif"],
                gilroy_italic: ["gilroy-italic", "sans-serif"],
                gilroy_bold: ["gilroy-bold", "sans-serif"],
                gilroy_bold_italic: ["gilroy-bold-italic", "sans-serif"],
                gilroy_xbold: ["gilroy-xbold", "sans-serif"],
                gilroy_xbold_italic: ["gilroy-xbold-italic", "sans-serif"],
            },
            colors: {
                orangeCF: "#DF6603",
                mintCF: "#047676",
                yellowCF: "#ffae00",
                darkCF: "#333132",
                lightCF: "#fbf8f0",
                blueCF: "#0f1b49",
                beigeCF: "#f4eae2",
                greenCF: "#406345",
                darkGreenCF: "#0c2f37",
            },
        },
    },
    plugins: [],
};
