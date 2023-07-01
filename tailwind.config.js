/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('../src/assets/subscribe.jpeg ')",
      }
    },
  },
  plugins: [],
}
