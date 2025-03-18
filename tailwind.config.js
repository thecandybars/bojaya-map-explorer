/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#396B53',
        secondary: '#8BBDC9',
        accent: '#E4BE76',
        dark: '#1F3A2D',
        light: '#F3F7F4',
      },
      backgroundColor: {
        'black/30': 'rgba(0, 0, 0, 0.3)',
        'gray-900/95': 'rgba(17, 24, 39, 0.95)',
        'gray-900/80': 'rgba(17, 24, 39, 0.8)',
        'gray-800/50': 'rgba(31, 41, 55, 0.5)',
        'gray-800/70': 'rgba(31, 41, 55, 0.7)',
        'amber-900/90': 'rgba(120, 53, 15, 0.9)',
      },
      animation: {
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'breathe': 'breathe 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}