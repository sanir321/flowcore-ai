/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#1A0B05', // Deep warm dark (Conduit-like)
                    orange: '#CE4F18', // Burnt orange accent
                    gray: '#F9F9F9', // Light bento card bg
                    text: '#4A4A4A' // Soft gray text
                }
            }
        },
    },
    plugins: [],
}
