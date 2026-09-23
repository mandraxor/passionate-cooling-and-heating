/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // High-performance HVAC Palette: Deep Navy, Energetic Crimson Red, Cool Ice Blue, Clean Slate
        hvac: {
          navy: '#07152b',
          'navy-deep': '#040d1a',
          'navy-surface': '#0b1d3a',
          'navy-light': '#12284d',
          red: '#dc2626',
          'red-hover': '#b91c1c',
          'red-bright': '#ef4444',
          'red-soft': '#fee2e2',
          blue: '#0284c7',
          'blue-hover': '#0369a1',
          'blue-bright': '#38bdf8',
          'blue-ice': '#e0f2fe',
          slate: '#0f172a',
          'slate-card': '#1e293b',
          'slate-border': '#334155',
          'slate-muted': '#64748b',
        },
        navy: {
          deep: '#07152b',
          dark: '#0b1e38',
          slate: '#1e293b',
          muted: '#475569',
        },
        glacier: {
          DEFAULT: '#0284c7',
          hover: '#0369a1',
          light: '#38bdf8',
          tint: '#e0f2fe',
        },
        ice: {
          canvas: '#f8fafc',
          card: 'rgba(255, 255, 255, 0.95)',
          border: 'rgba(226, 232, 240, 0.8)',
          accent: '#38bdf8',
          tint: '#e0f2fe',
        },
        emergency: {
          DEFAULT: '#dc2626',
          hover: '#b91c1c',
          light: '#fee2e2',
        }
      },
      boxShadow: {
        'hvac-glow': '0 0 35px -5px rgba(2, 132, 199, 0.25)',
        'red-glow': '0 0 30px -5px rgba(220, 38, 38, 0.35)',
        'card-elevated': '0 10px 30px -5px rgba(7, 21, 43, 0.08), 0 4px 6px -2px rgba(7, 21, 43, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(7, 21, 43, 0.14), 0 8px 12px -3px rgba(7, 21, 43, 0.08)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
