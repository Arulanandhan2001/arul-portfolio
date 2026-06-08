/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        cosmic: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5b8fc',
          400: '#8194f8',
          500: '#6471f1',
          600: '#5254e5',
          700: '#4543ca',
          800: '#3939a3',
          900: '#333581',
          950: '#1e1e4b',
        },
        nebula: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        aurora: {
          400: '#34d399',
          500: '#10b981',
        },
        void: {
          900: '#04040f',
          800: '#070714',
          700: '#0a0a1e',
          600: '#0d0d28',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        typing: 'typing 3.5s steps(40, end), blink .75s step-end infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'orbit-1': 'orbit 10s linear infinite',
        'orbit-2': 'orbit 14s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #6471f1, 0 0 20px #6471f1, 0 0 30px #6471f1' },
          to: { boxShadow: '0 0 20px #a855f7, 0 0 40px #a855f7, 0 0 60px #a855f7' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-gradient':
          'linear-gradient(135deg, #04040f 0%, #0a0a1e 50%, #070714 100%)',
        'hero-gradient':
          'radial-gradient(ellipse at 50% 50%, rgba(100,113,241,0.15) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
