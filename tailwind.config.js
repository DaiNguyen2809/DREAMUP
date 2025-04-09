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
                greenCF: "#14463a",
                darkGreenCF: "#0e2f25",
                yellowCF: "#ffb91c",
                darkCF: "#302e2d",
                lightCF: "#fbf8f0",
                brownCF: "#764b00",
            },
        },
    },
    plugins: [],
};
