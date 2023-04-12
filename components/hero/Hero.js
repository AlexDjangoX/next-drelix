import { Grid, Heading, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Grid placeItems='center' height='calc(100vh - 18rem)'>
      <Heading
        fontFamily='Roboto'
        fontSize='6rem'
        color='brand.yellow.300'
        boxShadow='shadow.blackShadow.500'
      >
        Welcome to Drelix!!
      </Heading>
    </Grid>
  );
};

export default Hero;
