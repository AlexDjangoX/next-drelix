import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import { colors } from '../styles/colors';
import { shadows } from '../styles/shadow';

const fonts = {
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
  },
};
const theme = extendTheme({
  colors,
  fonts,
  shadows,
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
