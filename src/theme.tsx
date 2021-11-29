import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const chartTheme = {
  colors: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    lavender: '#8884d8',
    tooltip: 'rgba(128,128,128, 0.2)',
    annotationBk: 'rgba(136, 132, 216, 0.4)',
    boxShadow: 'rgba(0, 0, 0, 0.2)',
  },
  space: {
    xxxl: '4rem',
    xxl: '3rem',
    xl: '2rem',
    lg: '1.5rem',
    md: '1rem',
    sm: '0.5rem',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, ...chartTheme });

export default theme;
