/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        mist: '#F4F1EA',
        sand: '#E8E0D4',
        pine: '#1F4D3A',
        sage: '#3D6B54',
        lime: {
          200: '#D5DE9A',
          300: '#B8C477',
          400: '#A7B65E',
          500: '#8E9F45',
          600: '#71832F',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Geist"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
