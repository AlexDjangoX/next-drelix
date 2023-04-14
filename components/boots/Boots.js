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

// import { useState, useRef } from 'react';
// import { Box, Text, TabList, Tab, Tabs } from '@chakra-ui/react';

// const Section = ({ title, children, sectionRef }) => {
//   return (
//     <Box height='80vh' overflowY='auto' ref={sectionRef}>
//       <Text fontSize='3xl'>{title}</Text>
//       {children}
//     </Box>
//   );
// };

// const TabSection = ({ title, index, activeIndex, onClick }) => {
//   return (
//     <Tab
//       onClick={() => onClick(index)}
//       borderBottomWidth={activeIndex === index ? '4px' : '1px'}
//       borderBottomColor={activeIndex === index ? 'blue.500' : 'gray.500'}
//       borderBottomStyle='solid'
//     >
//       {title}
//     </Tab>
//   );
// };

// const Boots = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//   ];

//   const handleTabClick = (index) => {
//     setActiveIndex(index);
//     const sectionRef = sectionRefs[index].current;
//     if (sectionRef) {
//       sectionRef.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <Box
//       minHeight='100vh'
//       display='grid'
//       gridTemplateRows='10vh 80vh 10vh'
//       gridTemplateColumns='20% 80%'
//     >
//       <Box gridRow='1' gridColumn='1 / 3' backgroundColor='gray.200' />
//       <Box gridRow='2' gridColumn='1' backgroundColor='gray.100'>
//         <Tabs isFitted>
//           <TabList
//             display='grid'
//             gridTemplateRows='repeat(5, 1fr)'
//             alignItems='end'
//           >
//             <TabSection
//               title='Section 1'
//               index={0}
//               activeIndex={activeIndex}
//               onClick={handleTabClick}
//             />
//             <TabSection
//               title='Section 2'
//               index={1}
//               activeIndex={activeIndex}
//               onClick={handleTabClick}
//             />
//             <TabSection
//               title='Section 3'
//               index={2}
//               activeIndex={activeIndex}
//               onClick={handleTabClick}
//             />
//             <TabSection
//               title='Section 4'
//               index={3}
//               activeIndex={activeIndex}
//               onClick={handleTabClick}
//             />
//             <TabSection
//               title='Section 5'
//               index={4}
//               activeIndex={activeIndex}
//               onClick={handleTabClick}
//             />
//           </TabList>
//         </Tabs>
//       </Box>
//       <Box
//         gridRow='2'
//         gridColumn='2'
//         backgroundColor='white'
//         display='grid'
//         gridTemplateRows='repeat(5, 80vh)'
//         gridTemplateColumns='1fr'
//       >
//         <Section title='Section 1' sectionRef={sectionRefs[0]} />
//         <Section title='Section 2' sectionRef={sectionRefs[1]} />
//         <Section title='Section 3' sectionRef={sectionRefs[2]} />
//         <Section title='Section 4' sectionRef={sectionRefs[3]} />
//         <Section title='Section 5' sectionRef={sectionRefs[4]} />
//       </Box>
//       <Box gridRow='3' gridColumn='1 / 3' backgroundColor='gray.200' />
//     </Box>
//   );
// };
// export default Boots;
