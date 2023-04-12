import { Grid, Heading } from '@chakra-ui/react';
import { blackShadows } from '../../styles/shadows';
const Hero = () => {
  return (
    <Grid placeItems='center' height='calc(100vh - 18rem)'>
      <Heading
        fontFamily='Roboto'
        fontSize='2rem'
        color='violet'
        textShadow={blackShadows[200]}
      >
        Welcome to Drelix !!
      </Heading>
    </Grid>
  );
};

export default Hero;
