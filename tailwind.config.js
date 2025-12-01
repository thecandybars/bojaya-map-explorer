/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#7CBBCD',
        accent: '#64B0A4',
        dark: '#000000',
        light: '#FFFFFF',
      },
      backgroundColor: {
        'black/30': 'rgba(0, 0, 0, 0.3)',
        'black/95': 'rgba(0, 0, 0, 0.95)',
        'black/80': 'rgba(0, 0, 0, 0.8)',
        'black/50': 'rgba(0, 0, 0, 0.5)',
        'black/70': 'rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'breathe': 'breathe 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}