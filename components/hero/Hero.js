import { Grid, Heading, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <section
      style={{
        '--tile-start-rgb': '239, 245, 249',
        '--tile-end-rgb': '228, 232, 233',
        background: `linear-gradient(to bottom right, rgb(var(--tile-start-rgb)), rgb(var(--tile-end-rgb)))`,
      }}
    >
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
    </section>
  );
};

export default Hero;
