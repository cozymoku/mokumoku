// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F9F8FD',
          100: '#F3F2FA',
          200: '#EAE8F7',
          300: '#D5D2EF',
          400: '#B0A8E3',
          500: '#8A7EDA',
          600: '#7569C7',
          700: '#5F55A8',
          800: '#4A4186',
          900: '#352D64',
        },
        pink: {
          100: '#FDEFF8',
          300: '#F7C6E4',
        },
        orange: {
          100: '#FFF7ED',
          300: '#FFE0B2',
        },
        // --- 새로 추가된 색상들 ---
        blue: {
          100: '#E0F2FE', // 예시 색상 코드, 필요시 조정
          300: '#93C5FD',
        },
        green: {
          100: '#F0FDF4',
          300: '#86EFAC',
        },
        yellow: {
          100: '#FEFCE8',
          300: '#FDE047',
        },
        red: {
          100: '#FEF2F2',
          300: '#FCA5A5',
        },
        indigo: {
          100: '#EEF2FF',
          300: '#A5B4FC',
        },
        teal: {
          100: '#F0FDFA',
          300: '#5EEAD4',
        },
        cyan: {
          100: '#ECFEFF',
          300: '#67E8F9',
        },
        rose: {
          100: '#FFF1F2',
          300: '#FDA4AF',
        },
        lime: {
          100: '#F7FEE7',
          300: '#BEF264',
        },
        // --- 여기까지 새로 추가 ---
      },
      // 애니메이션 keyframes는 index.css에 있다면 그대로 두거나 여기에 옮길 수 있습니다.
      // keyframes: {
      //   blob: {
      //     '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
      //     '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
      //     '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
      //   }
      // },
      // animation: {
      //   blob: 'blob 7s infinite',
      // }
    },
  },
  plugins: [],
}