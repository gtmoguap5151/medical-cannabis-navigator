/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f2f7f3',
          100: '#e0ece2',
          200: '#c2d9c7',
          300: '#97bd9f',
          400: '#679b72',
          500: '#457c52',
          600: '#33633f',
          700: '#2a4f34',
          800: '#24402d',
          900: '#1f3527',
          950: '#0f1d15',
        },
        sand: {
          50: '#faf8f2',
          100: '#f3eee0',
          200: '#e7dcc2',
          300: '#d7c39b',
          400: '#c5a672',
          500: '#b78f54',
          600: '#a97a48',
          700: '#8c603d',
          800: '#724e37',
          900: '#5e4130',
        },
        ink: {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c7cec8',
          300: '#a0aca3',
          400: '#75847a',
          500: '#59685f',
          600: '#45524a',
          700: '#39433d',
          800: '#303733',
          900: '#1c221e',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,29,21,0.04), 0 8px 24px -12px rgba(16,29,21,0.18)',
        lift: '0 12px 40px -16px rgba(16,29,21,0.28)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.5s ease both',
      },
    },
  },
  plugins: [],
};
