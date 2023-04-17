import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Box,
  Text,
  TabList,
  Tab,
  Tabs,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const Section = ({ title, children, sectionRef }) => {
  return (
    <Box ref={sectionRef} pt={0} minHeight='95vh'>
      <Text fontSize='3xl'>{title}</Text>
      {children}
    </Box>
  );
};

const TabSection = ({ title, index, activeIndex, onClick }) => {
  return (
    <Tab
      onClick={() => onClick(index)}
      borderBottomWidth={activeIndex === index ? '4px' : '1px'}
      borderBottomColor={activeIndex === index ? 'blue.500' : 'gray.500'}
      borderBottomStyle='solid'
    >
      {title}
    </Tab>
  );
};

const Spodnie = ({ pants }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleTabClick = (index) => {
    setActiveIndex(index);
    const sectionRef = sectionRefs[index].current;
    if (sectionRef) {
      sectionRef.style.paddingTop = '125px';
      sectionRef.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Box h={61} />
      <Box display='grid' gridTemplateColumns='8% 92%'>
        <Box gridColumn='1' backgroundColor='gray.100'>
          <Tabs isFitted>
            <TabList
              display='grid'
              gridTemplateRows='repeat(5, 1fr)'
              alignItems='end'
              position='fixed'
              top='12rem'
              zIndex='1'
            >
              <TabSection
                title='Section 1'
                index={0}
                activeIndex={activeIndex}
                onClick={handleTabClick}
              />
              <TabSection
                title='Section 2'
                index={1}
                activeIndex={activeIndex}
                onClick={handleTabClick}
              />
              <TabSection
                title='Section 3'
                index={2}
                activeIndex={activeIndex}
                onClick={handleTabClick}
              />
              <TabSection
                title='Section 4'
                index={3}
                activeIndex={activeIndex}
                onClick={handleTabClick}
              />
              <TabSection
                title='Section 5'
                index={4}
                activeIndex={activeIndex}
                onClick={handleTabClick}
              />
            </TabList>
          </Tabs>
        </Box>

        <Box
          gridColumn='2'
          backgroundColor='pink'
          display='grid'
          gridTemplateRows='repeat(5, auto)'
          gridTemplateColumns='1fr'
        >
          <Section title='Section 1' sectionRef={sectionRefs[0]}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} ml={16} mr={16}>
              {pants.map((pant) => (
                <GridItem key={pant.id}>
                  <Text
                    mt={2}
                    fontSize='1rem'
                    textAlign='center'
                    fontFamily='Roboto'
                  >
                    {pant.short_description}
                  </Text>
                  <Image
                    src={pant.image_url}
                    alt={pant.short_description}
                    width={300}
                    height={400}
                  />
                </GridItem>
              ))}
            </Grid>
          </Section>
          <Section title='Section 2' sectionRef={sectionRefs[1]}>
            {/* content for section 2 */}
          </Section>
          <Section title='Section 3' sectionRef={sectionRefs[2]}>
            {/* content for section 3 */}
          </Section>
          <Section title='Section 4' sectionRef={sectionRefs[3]}>
            {/* content for section 4 */}
          </Section>
          <Section title='Section 5' sectionRef={sectionRefs[4]}>
            {/* content for section 5 */}
          </Section>
        </Box>
      </Box>
    </>
  );
};

export default Spodnie;
