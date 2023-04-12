import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const colors = {
  yellow: {
    50: '#FFFFF0',
    100: '#FEFCBF',
    200: '#FAF089',
    300: '#F6E05E',
    400: '#FFD700',
    500: '#FFC200',
    600: '#FFA500',
    700: '#FF8C00',
    800: '#FF6600',
    900: '#FF4500',
  },
  blue: {
    50: '#F5F5FF',
    100: '#D6D6FF',
    200: '#ADADFF',
    300: '#8585FF',
    400: '#6B6BFF',
    500: '#5252FF',
    600: '#4040FF',
    700: '#2E2EFF',
    800: '#1E1EFF',
    900: '#0000FF',
  },
  red: {
    50: '#FFE5E5',
    100: '#FFBDBD',
    200: '#FF9494',
    300: '#FF6B6B',
    400: '#FF4242',
    500: '#FF1919',
    600: '#E50000',
    700: '#BF0000',
    800: '#990000',
    900: '#730000',
  },
  black: {
    50: '#F5F5F5',
    100: '#DCDCDC',
    200: '#C3C3C3',
    300: '#AAAAAA',
    400: '#919191',
    500: '#787878',
    600: '#5F5F5F',
    700: '#464646',
    800: '#2D2D2D',
    900: '#141414',
  },
};

const fonts = {
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
  },
};
const theme = extendTheme({ colors, fonts });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
