/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* BRAND PURPLE */
        'brand-purple': {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7B2F8E',   // MAIN BRAND PURPLE (Banner match)
          700: '#5A1F6E',
          800: '#4c1d95',
          900: '#3b1a6e',
        },

        /* BRAND GREEN */
        'brand-green': {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#5FBF3A',   // LOGO GREEN
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },

        /* BRAND ORANGE */
        'brand-orange': {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#F28C28',   // CTA ORANGE
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },

        /* OPTIONAL WOOD TONE */
        'brand-wood': {
          100: '#f5e6d3',
          200: '#d4a574',
          300: '#8b6f47',
        }
      },

      /* GUJARATI + ENGLISH FONT */
      fontFamily: {
        gujarati: ['"Noto Sans Gujarati"', 'Poppins', 'sans-serif'],
      },

      /* BACKGROUND IMAGES */
      backgroundImage: {
        'wood-texture': "url('/wood-texture.jpg')",
        'gradient-purple':
          'linear-gradient(135deg, #5A1F6E 0%, #7B2F8E 50%, #9B5BB5 100%)',
      },

      /* PREMIUM SHADOWS */
      boxShadow: {
        premium: '0 10px 40px rgba(90, 31, 110, 0.35)',
        wood: '0 8px 30px rgba(139, 111, 71, 0.4)',
      },
    },
  },
  plugins: [],
};
