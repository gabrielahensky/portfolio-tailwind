/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        'primary-dark': '#1E40AF',
        secondary: '#FBBF24',
        accent: '#F472B6',
        neutral: '#374151',
        'base-100': '#FFFFFF',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        card: '0 10px 25px rgba(0,0,0,0.1)',
        'card-hover': '0 15px 30px rgba(0,0,0,0.15)',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
