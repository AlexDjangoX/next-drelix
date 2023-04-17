import Image from 'next/image';
import { Grid, GridItem, Text } from '@chakra-ui/react';

const Boots = ({ sandals, halfBoots, fullBoots }) => {
  return (
    <>
      <section>
        <Text
          mt={10}
          fontSize='4rem'
          textAlign='center'
          fontFamily='Roboto'
          fontWeight='100'
        >
          Sandals
        </Text>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} ml={16} mr={16}>
          {sandals.map((sandals) => (
            <GridItem key={sandals.id}>
              <Image
                src={sandals.image_url}
                alt={sandals.short_description}
                width={'300'}
                height={400}
              />
              <Text
                mt={2}
                fontSize='2rem'
                textAlign='center'
                fontFamily='Roboto'
              >
                {sandals.short_description}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </section>
      <section>
        <Text
          mt={10}
          fontSize='4rem'
          textAlign='center'
          fontFamily='Roboto'
          fontWeight='100'
        >
          Full boots
        </Text>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} ml={16} mr={16}>
          {fullBoots.map((fullBoot) => (
            <GridItem key={fullBoots.id}>
              <Image
                src={fullBoot.image_url}
                alt={fullBoot.short_description}
                width={'300'}
                height={400}
              />
              <Text
                mt={2}
                fontSize='2rem'
                textAlign='center'
                fontFamily='Roboto'
              >
                {fullBoot.short_description}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </section>
      <section>
        <Text
          mt={10}
          fontSize='4rem'
          textAlign='center'
          fontFamily='Roboto'
          fontWeight='100'
        >
          Half Boots
        </Text>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {halfBoots.map((halfBoot) => (
            <GridItem key={halfBoot.id}>
              <Image
                src={halfBoot.image_url}
                alt={halfBoot.short_description}
                width={400}
                height={600}
              />
              <Text
                mt={2}
                fontSize='2rem'
                textAlign='center'
                fontFamily='Roboto'
              >
                {halfBoot.short_description}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Boots;
