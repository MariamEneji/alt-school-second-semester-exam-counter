/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        '404' : "url('/src/404image.jpeg')",
        'bug' : "url('/src/bug.png')"

      }
    },
  },
  plugins: [],
}

