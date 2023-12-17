/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      colors: {
        'primary': '#E8E8E8',
        'secondary': '#142BD9',
        'tertiary': '#F6F5F3',
        'glass': "rgba(255, 255, 255, 0.5)"
      },
      gridTemplateColumns: {
        "hero": '650px 250px 250px',
      },
      gridTemplateRows: {
        "hero": '340px 130px',
      }
    },
  },
  plugins: [],
}
