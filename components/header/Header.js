import React from 'react';
import { Box, Grid, GridItem, Link, Image, Button } from '@chakra-ui/react';

const Header = () => {
  const logoSrc = '/path/to/your/logo/image'; // Replace with the path to your logo image

  return (
    <Box
      as='header'
      position='sticky'
      top='0'
      zIndex='sticky'
      height='8rem'
      bg='yellow.400'
      boxShadow='sm'
    >
      <Grid
        templateColumns='repeat(7, 1fr)'
        height='100%'
        maxWidth='container.xl'
        pl={4}
        pr={4}
        alignContent={'center'}
      >
        <GridItem>
          <Link href='/'>
            <Image src={logoSrc} alt='Drelix' />
          </Link>
        </GridItem>
        <GridItem colSpan={6}>
          <Grid templateColumns='repeat(6, 1fr)' gap={1} textAlign='end'>
            <GridItem>
              <Link href='/rekawice'>
                <Button colorScheme='whiteAlpha' color='black'>
                  Rękawice
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link2'>
                <Button colorScheme='whiteAlpha' color='black'>
                  Link 2
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link3'>
                <Button colorScheme='whiteAlpha' color='black'>
                  Link 3
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link4'>
                <Button colorScheme='whiteAlpha' color='black'>
                  Link 4
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/link5'>
                <Button colorScheme='whiteAlpha' color='black'>
                  Link 5
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link href='/contact'>
                <Button colorScheme='whiteAlpha' color='black'>
                  Contact
                </Button>
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
