module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'teal-blue-300': '#5BADB9',
        'teal-blue-400': '#46A3B0',
        'teal-blue-500': '#3299a8',
        'teal-blue-600': '#287A86',
      },

      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
