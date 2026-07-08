/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-alt': 'var(--paper-alt)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        copper: 'var(--copper)',
        'copper-soft': 'var(--copper-soft)',
        teal: 'var(--teal)',
        'teal-soft': 'var(--teal-soft)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'dash-flow': {
          to: { strokeDashoffset: '-266' },
        },
      },
      animation: {
        'dash-flow': 'dash-flow 3.2s linear infinite',
      },
    },
  },
  plugins: [],
}
