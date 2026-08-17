/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#09080d',
          card: '#13111b',
          border: '#242033',
          lighter: '#1a1726',
        },
        warm: {
          cream: '#fdf8f3',
          sand: '#f3e8dc',
          muted: '#ab9b8c',
          gold: '#e2be72',
          amber: '#f5d794',
        },
        burgundy: {
          DEFAULT: '#6b2737',
          light: '#8e384c',
          glow: 'rgba(107, 39, 55, 0.4)',
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
        handwritten: ['var(--font-caveat)', 'cursive'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(226, 190, 114, 0.3)',
        'glow-burgundy': '0 0 30px -5px rgba(107, 39, 55, 0.4)',
        'photo-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'vinyl-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
