/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    backdropBlur: {
      'none': '0',
      'sm': '4px',
      'md': '12px',
      'lg': '24px',
      'xl': '40px',
    },
    boxShadow: {
      'custom': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },
    colors: {
      'custom-bg': 'rgba(255, 255, 255, 0.05)',
      'custom-border': 'rgba(255, 255, 255, 0.18)',
    },
  },

variants: {
  backdropFilter: ['responsive'], // Enable responsive variants for backdrop filter
},
plugins: [
  require('tailwindcss-filters'), // If you use the tailwindcss-filters plugin
],
}
