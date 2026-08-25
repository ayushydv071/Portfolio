/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          bg: '#1E1E1E',           // Page background (dark charcoal)
          card: '#2A2A2A',         // Card/section background
          pill: '#3A3A3A',         // Navbar/pill solid background
          border: 'rgba(255, 255, 255, 0.06)',
        },
        mint: {
          DEFAULT: '#22C55E',      // Primary bright mint-green accent
          hover: '#16A34A',
          glow: 'rgba(34, 197, 94, 0.25)',
        },
        pink: {
          accent: '#EC4899',       // Secondary accent (ONLY for hero animated word)
          glow: 'rgba(236, 72, 153, 0.25)',
        },
        text: {
          primary: '#FFFFFF',      // White headings/body
          muted: '#A8A8A8',        // Secondary muted text
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'charcoal-card': '0 8px 30px rgba(0, 0, 0, 0.35)',
        'mint-glow': '0 10px 30px -10px rgba(34, 197, 94, 0.35)',
        'pink-glow': '0 10px 30px -10px rgba(236, 72, 153, 0.35)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
