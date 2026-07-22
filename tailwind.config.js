/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          dark: '#3d8b40',
          light: '#6fc873',
        },
        gold: {
          DEFAULT: '#FFD700',
          dark: '#e6c200',
        },
        bg: {
          DEFAULT: '#1A1A2E',
          card: '#232342',
          soft: '#2b2b4d',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pop-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        'confetti-fall': {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(120px) rotate(360deg)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(76,175,80,0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(76,175,80,0)' },
        },
      },
      animation: {
        'pop-in': 'pop-in 0.35s ease-out',
        'confetti-fall': 'confetti-fall 0.9s ease-in forwards',
        shake: 'shake 0.4s ease-in-out',
        'pulse-glow': 'pulse-glow 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
