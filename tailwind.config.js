/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#08191E',
        royal: '#11353D',
        orchid: '#21606A',
        gold: '#E8C88D',
        lavender: '#EEF7F5',
      },
    },
  },
  plugins: [],
};
