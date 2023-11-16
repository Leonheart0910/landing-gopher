module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      custom: ['Noto Sans KR', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#dce2f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#6c6c72',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
