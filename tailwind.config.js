// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        scaleIn: { // RecitationCardModal을 위한 애니메이션 추가
          'from': { transform: 'scale(0.95)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        blob: 'blob 7s infinite cubic-bezier(0.6, 0.01, -0.2, 0.95)',
        scaleIn: 'scaleIn 0.3s ease-out forwards', // RecitationCardModal을 위한 애니메이션 추가
      },
    },
  },
  plugins: [],
}