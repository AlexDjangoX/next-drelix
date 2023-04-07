import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
