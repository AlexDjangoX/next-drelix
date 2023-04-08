import { supabase } from '../../utils/supabaseClient';
import { Box, Grid, Image, Text } from '@chakra-ui/react';

const Shirts = ({ shirts }) => {
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
      {shirts.map((shirt) => (
        <Box
          key={shirt.id}
          w='20rem'
          h='25rem'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
        >
          <Text fontWeight='bold' fontSize='xl' p={2}>
            {shirt.category}
          </Text>
          <Image
            src={shirt.image_url}
            alt={shirt.short_description}
            mt={3}
            mx={1}
            mb={1}
          />
          <Text p={2}>{shirt.short_description}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default Shirts;
