// components/header/Header.js
import React from 'react';
import { Box, Grid, GridItem, Link, Image } from '@chakra-ui/react';

const Header = () => {
  const logoSrc = '/path/to/your/logo/image'; // Replace with the path to your logo image

  return (
    <Box
      as='header'
      position='sticky'
      top='0'
      zIndex='sticky'
      height='4rem'
      bg='yellow.400'
      boxShadow='sm'
    >
      <Grid
        templateColumns='repeat(7, 1fr)'
        alignItems='center'
        justifyContent='space-between'
        height='100%'
        maxWidth='container.xl'
        margin='0 auto'
        p={4}
      >
        <GridItem>
          <Link href='/'>
            <Image src={logoSrc} alt='Your Logo' />
          </Link>
        </GridItem>
        <GridItem colSpan={6}>
          <Grid
            templateColumns='repeat(6, 1fr)'
            alignItems='center'
            justifyContent='flex-end'
            gap={4}
          >
            <GridItem>
              <Link href='/link1' color='black'>
                Link 1
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link2' color='black'>
                Link 2
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link3' color='black'>
                Link 3
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link4' color='black'>
                Link 4
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link5' color='black'>
                Link 5
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link6' color='black'>
                Link 6
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
