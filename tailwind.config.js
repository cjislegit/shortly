/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'shorten-mobile': 'url("/src/assets/images/bg-shorten-mobile.svg")',
      },
      colors: {
        'custom-cyan': 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        'custom-gray': 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8 %, 14 %)',
      },
    },
  },
  plugins: [],
};
