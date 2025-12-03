/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Scan root HTML files
    './scripts/**/*.js', // Scan scripts for dynamically added classes
    './lessons/**/*.html', // Scan all lesson files for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
