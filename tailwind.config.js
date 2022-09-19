module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontWeight: {
        regular: 400, // 기본
        medium: 500,
        bold: 700,
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, 318px)',
      },
      screens: {
        sm: '0px',
      },
    },
  },

  plugins: [],
};
