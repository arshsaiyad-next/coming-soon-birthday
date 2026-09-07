/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#08040a",
          900: "#100614",
          800: "#180a1e",
          700: "#220e2a",
        },
        rose: {
          blush: "#ffcad4",
          petal: "#ff9ebb",
          gold: "#f4a7b9",
          deep: "#d9658b",
          velvet: "#2d081f",
          wine: "#1c0414",
        },
        champagne: {
          light: "#fff0f3",
          soft: "#fce7b2",
          gold: "#f5d590",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        urdu: ['"Noto Nastaliq Urdu"', 'Amiri', 'serif'],
      },
      animation: {
        'starlight-pulse': 'starlightPulse 4s ease-in-out infinite alternate',
        'romantic-glow': 'romanticGlow 5s ease-in-out infinite alternate',
      },
      keyframes: {
        starlightPulse: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        romanticGlow: {
          '0%': { filter: 'drop-shadow(0 0 12px rgba(255, 179, 198, 0.25))' },
          '100%': { filter: 'drop-shadow(0 0 32px rgba(255, 158, 187, 0.6))' },
        },
      },
    },
  },
  plugins: [],
}
