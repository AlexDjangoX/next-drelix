import { Box, Grid, Image, Text } from '@chakra-ui/react';

const Gloves = ({ gloves }) => {
  console.log(gloves);
  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={6}
    >
      {gloves.map((glove) => (
        <Box
          key={glove.id}
          w='20rem'
          h='35rem'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
        >
          <Text fontWeight='bold' fontSize='xl' p={2}>
            {glove.category}
          </Text>
          <Image
            src={glove.image_url}
            alt={glove.short_description}
            mt={3}
            mx={1}
            mb={1}
          />
          <Text p={2}>{glove.short_description}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default Gloves;
