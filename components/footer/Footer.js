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
      height='8rem'
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
            <em>Odzież Robocza Drelix</em>
            <br />
            ulica 43 Emila Zegadłowicza
            <br />
            Wadowice, 34-100
          </Text>
        </GridItem>
        <GridItem textAlign='right'>
          <Text color='black'>
            Tel: +1 (123) 456-7890
            <br />
            Email: info@yourcompany.com
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
