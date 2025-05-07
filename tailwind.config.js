import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#a0f0e0',
          DEFAULT: '#38bdf8',
          dark: '#0ea5e9',
        },
        bg: '#121212', // Dark background color
        card: '#1F1F1F', // Card background for better contrast
        text: '#E0E0E0', // Light text color
        textLight: '#333', // Dark text for light mode
        accent: '#6200EE', // Accent color for interactive elements
      },
    },
  },
  darkMode: 'class', // Use 'class' strategy for toggling dark mode
  plugins: [require('tailwindcss-animate')],
};
