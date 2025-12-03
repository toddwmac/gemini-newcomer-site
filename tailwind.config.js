/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Scan root HTML files
    './scripts/**/*.js', // Scan scripts for dynamically added classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
