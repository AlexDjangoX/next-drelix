import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Gloves = ({ gloves }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
      {gloves.map((glove, index) => (
        <Box
          key={glove.id}
          w='20rem'
          h='35rem'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredIndex === index ? (
            <Text p={2}>{glove.short_description.split('_')[1]}</Text>
          ) : (
            <>
              <Box key={index}>
                <Text fontWeight='bold' fontSize='xl' p={2} key={index}>
                  {glove.category}
                </Text>
                <Image
                  src={glove.image_url}
                  alt={glove.short_description}
                  mt={3}
                  mx={1}
                  mb={1}
                />
                <Text p={2}>{glove.short_description.split('_')[0]}</Text>
              </Box>
            </>
          )}
        </Box>
      ))}
    </Grid>
  );
};

export default Gloves;
