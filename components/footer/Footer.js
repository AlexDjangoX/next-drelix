// components/footer/Footer.js
import React from 'react';
import { Box, Grid, GridItem, Link, Text, Button } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const facebookLink = 'https://www.facebook.com/your-page';

  return (
    <Box
      as='footer'
      bg='yellow.400'
      boxShadow='sm'
      height='4rem'
      position='sticky'
      bottom='0'
      zIndex='sticky'
    >
      <Grid
        templateColumns='repeat(3, 1fr)'
        alignItems='center'
        justifyContent='space-between'
        height='100%'
        maxWidth='container.xl'
        margin='0 auto'
        p={4}
      >
        <GridItem>
          <Link href={facebookLink} isExternal color='black'>
            <FaFacebookF />
          </Link>
        </GridItem>
        <GridItem textAlign='center'>
          <Text color='black'>
            Your Company Name
            <br />
            1234 Your Street
            <br />
            Your City, Your Country, Your ZIP
          </Text>
        </GridItem>
        <GridItem textAlign='right'>
          <Text color='black'>
            Tel: +1 (123) 456-7890
            <br />
            Email: info@yourcompany.com
          </Text>
          <Button colorScheme='whiteAlpha' color='black' mt={2}>
            Button Text
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
