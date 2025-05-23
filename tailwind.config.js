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
    },
  },
  plugins: [],
}

