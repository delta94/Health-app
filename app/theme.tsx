import { extendTheme } from '@chakra-ui/react';

const colors = {
  light: '#fff',
  primary: {
    300: '#FFCC21',
    400: '#FF963C',
    500: '#EA6C00',
  },
  secondary: {
    300: '#8FE9D0',
  },
  dark: {
    500: '#414141',
    600: '#2E2E2E',
  },
  gray: {
    400: '#777777',
  },
};

const fonts = {
  fonts: {
    inter: 'var(--font-inter)',
    hira: 'var(--font-hira)',
  },
};

export const theme = extendTheme({ colors, fonts });
