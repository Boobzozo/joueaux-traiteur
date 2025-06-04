/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans Pro"', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FFE082',
          DEFAULT: '#FFD54F',
          dark: '#FFC107',
        },
        secondary: {
          light: '#AED581',
          DEFAULT: '#7CB342',
          dark: '#558B2F',
        },
        accent: {
          light: '#F48FB1',
          DEFAULT: '#EC407A',
          dark: '#C2185B',
        },
        cream: '#FFF8E1',
        beige: '#F5F0E1',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'texture': "url('https://images.pexels.com/photos/82256/pexels-photo-82256.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};