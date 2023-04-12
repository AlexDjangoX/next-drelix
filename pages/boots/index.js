import { Grid, Heading } from '@chakra-ui/react';

const index = () => {
  return (
    <Grid placeItems='center' height='100vh'>
      <Heading
        fontFamily='Roboto'
        fontSize='2rem'
        color='violet'
        textShadow='1px 1px #000'
      >
        Welcome to Drelix !!
      </Heading>
    </Grid>
  );
};

export default index;
