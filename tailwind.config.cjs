/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./pages/**/*.{js,ts,jsx,tsx,vue}",
        "./renderer/**/*.{js,ts,jsx,tsx,vue}",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            screens: {
                '3xl': '1600px',
            },
            container: {
                '3xl': '1600px'
            },
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
