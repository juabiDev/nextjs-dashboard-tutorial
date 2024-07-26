import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      screens: {
        xs: '480px', // Para dispositivos muy pequeños
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px', // Para dispositivos muy grandes
      },
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0057FF',  // Base color
          600: '#0045CC',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
        secondary: {
          50: '#FFE6F2',
          100: '#FFCCE5',
          200: '#FF99CC',
          300: '#FF66B2',
          400: '#FF3399',
          500: '#FF0080',  // Base color
          600: '#CC0066',
          700: '#99004D',
          800: '#660033',
          900: '#33001A',
        },
        accent: {
          50: '#EAFBFC',
          100: '#D5F8FA',
          200: '#ACF1F4',
          300: '#84E9EF',
          400: '#5BE2E9',
          500: '#33DBE3',  // Similar to Cool Mint, but a bit deeper for accentuation
          600: '#2CB6BD',
          700: '#218A92',
          800: '#166068',
          900: '#0B343D',
        },
        charcoal: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#4D4D4D',
          500: '#333333',  // Base color
          600: '#262626',
          700: '#1A1A1A',
          800: '#0D0D0D',
          900: '#000000',
        },
        softWhite: {
          50: '#FFFFFF',
          100: '#FEFEFE',
          200: '#FDFDFD',
          300: '#FCFCFC',
          400: '#FAFAFA',
          500: '#F5F5F5',  // Base color
          600: '#E0E0E0',
          700: '#CCCCCC',
          800: '#B8B8B8',
          900: '#A3A3A3',
        },
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
