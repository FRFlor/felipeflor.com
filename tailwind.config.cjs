/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            spacing: {
                112: '32rem'
            }
        },
    },
    plugins: [],
    safelist: ['pressed']
}
