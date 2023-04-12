import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Drelix</title>
    </Head>
    <main>
      <Header />
      <Box margin='0 auto' p={0}>
        {children}
      </Box>
      <Footer />
    </main>
  </>
);

export default Layout;
