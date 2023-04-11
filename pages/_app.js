import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    500: '#FF69B4',
  },
};
const theme = extendTheme({ colors });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
