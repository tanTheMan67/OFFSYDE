/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'kick-ball': {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)', opacity: '0' },
          '25%': { opacity: '1' },
          '70%': { transform: 'translateX(790px) translateY(-160px) rotate(180deg)',opacity:'.75' },
          '100%': { transform: 'translateX(1100px) translateY(0) rotate(360deg)' },
        },
        'kick-player': {
          '0%, 35%%': { opacity: '1' },
          '45%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'kick-ball': 'kick-ball 2.5s ease-in-out infinite',
        'kick-player': 'kick-player 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [ require('daisyui')],
}

