/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './templates/**/*.html',
    './**/templates/**/*.html',
    './static/src/**/*.js',
    './**/static/src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}