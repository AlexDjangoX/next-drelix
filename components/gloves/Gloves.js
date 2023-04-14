import { useState } from 'react';
import Image from 'next/image';
import { Box, Grid, Text, Button } from '@chakra-ui/react';

const Gloves = ({ gloves }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverEffectEnabled, setHoverEffectEnabled] = useState(true);

  const handleMouseEnter = (index) => {
    if (hoverEffectEnabled) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (hoverEffectEnabled) {
      setHoveredIndex(null);
    }
  };

  const handleToggleHoverEffect = () => {
    setHoverEffectEnabled(!hoverEffectEnabled);
  };

  return (
    <Box mx={12} m={12}>
      <Box textAlign='center' mb={6}>
        <Button onClick={handleToggleHoverEffect} colorScheme='blue' size='md'>
          {hoverEffectEnabled ? 'Disable Hover Effect' : 'Enable Hover Effect'}
        </Button>
      </Box>
      <Grid
        templateColumns='repeat(auto-fill, minmax(20rem, 1fr))'
        gap={6}
        justifyContent='center'
        placeItems='center'
        css={{ gridAutoFlow: 'dense' }}
      >
        {gloves
          .filter((glove) => glove.image_url.includes('700x700'))
          .map((glove, index) => (
            <Box
              key={glove.id}
              w='20rem'
              h='35rem'
              borderWidth='1px'
              borderRadius='lg'
              overflowY='scroll'
              overflowX='hidden'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoverEffectEnabled && hoveredIndex === index ? (
                <Text fontSize='xl' p={2}>
                  {glove.short_description.split('_')[1]}
                </Text>
              ) : (
                <>
                  <Box key={index}>
                    <Text fontWeight='bold' fontSize='xl' p={2} key={index}>
                      {glove.category}
                    </Text>
                    <Image
                      src={glove.image_url}
                      alt={glove.short_description}
                      width={400}
                      height={400}
                      mt={3}
                      mx={1}
                      mb={1}
                    />
                    <Text fontSize='xl' p={2}>
                      {glove.short_description.split('_')[0]}
                    </Text>
                  </Box>
                </>
              )}
            </Box>
          ))}

        {gloves
          .filter(
            (glove) =>
              glove.image_url.includes('1024') &&
              !glove.image_url.includes('700x700')
          )
          .map((glove, index) => {
            return (
              <Box
                key={glove.id}
                w='20rem'
                h='35rem'
                borderWidth='1px'
                borderRadius='lg'
                overflowY='scroll'
                overflowX='hidden'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {hoverEffectEnabled && hoveredIndex === index ? (
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
                        width={300}
                        height={300}
                      />
                      <Text p={2}>{glove.short_description.split('_')[0]}</Text>
                    </Box>
                  </>
                )}
              </Box>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Gloves;
