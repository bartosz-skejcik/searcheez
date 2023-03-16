/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                cursor: "cursor 1s linear infinite alternate",
            },
            colors: {
                dark: "#191825",
                block: "#252430",
                primary: "#E384FF",
                secondary: "#865DFF",
                tertiary: "#FFA3FD",
            },
        },
    },
    plugins: [],
};
