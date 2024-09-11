/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulblue: {
          10: '#e4f1f8',
          20: '#d9edf8',
          30: '#afd5eb',
          80: '#6cb1da',
          90: '#5faad7',
          100: '#1C87C6',
          200: '#1A78B0',
          300: '#17699A',
          400: '#145A84',
          500: '#114B6E',
          600: '#0E3C58',
          700: '#0B2D42',
          800: '#081E2C',
          900: '#050F16',
        },
      },
    },
    plugins: [],
    corePlugin: { preflight: true }
  }
}
