module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontWeight: {
        regular: 400, // 기본
        medium: 500,
        bold: 700,
      },
      colors: {
        primary1: '#737bc5',
        gray1: '#d9d9d9',
        gray2: '#b0b0b0',
      },
      borderRadius: {
        basic: '0.5rem',
      },
    },
  },

  plugins: [],
};
