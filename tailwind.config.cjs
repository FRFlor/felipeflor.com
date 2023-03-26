/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            spacing: {
                92: '23rem',
                // 96: '24rem', +4 per 1rem,
                120: '30rem',
                128: '32rem'
            }
        }
    },
    plugins: [],
    safelist: ['pressed'],
    darkMode: 'class',
}
