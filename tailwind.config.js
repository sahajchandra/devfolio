const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        brand: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dark: '#6d28d9',
          glow: '#a855f7',
        },
        charcoal: {
          950: '#08080c',
          900: '#0d0d12',
          800: '#14141c',
          700: '#1c1c27',
          600: '#2a2a38',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        signature: ['Caveat', 'cursive'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        blink: 'blink 1s step-end infinite',
        gradient: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [
    // Dark is the DEFAULT (base classes). The `light:` variant applies only
    // when <html class="light"> is set by the theme toggle.
    plugin(function ({ addVariant }) {
      addVariant('light', '.light &');
    }),
  ],
};
