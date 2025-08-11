/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // alterna pelo class="dark"
  content: [
    './templates/**/*.html',
    './**/templates/**/*.html',
    './static/**/*.js'
  ],
  safelist: [
    'bg-primary', 'text-primary',
    'bg-secondary', 'text-secondary',
    'bg-accent', 'text-accent',
    'bg-bg', 'text-text'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
