import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import {
  useColorModeValue,
  useDisclosure,
  chakra,
  VisuallyHidden,
  Grid,
  Button,
  Box,
  IconButton,
  VStack,
  CloseButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  function formatString(input) {
    const words = input.replace(/^\//, '').split('-');

    const capitalized = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalized.join(' ');
  }

  const pageLinks = [
    '/pants',
    '/boots',
    '/gloves',
    '/product-images',
    '/products',
    '/products-edit',
  ];

  return (
    <div style={{ position: 'sticky', top: 0, height: '64px' }}>
      <chakra.header
        bg={bg}
        w='full'
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow='md'
        color='brand.yellow.400'
        fontFamily={'Roboto'}
        fontWeight={100}
        // opacity={0.8}
      >
        <Grid
          templateColumns={{
            base: '1fr auto',
            md: 'repeat(2, 1fr)',
          }}
          alignItems='center'
          justifyContent='space-between'
          mx='auto'
          gap={1}
        >
          <Grid
            templateColumns='auto 1fr'
            alignItems='center'
            gridColumnGap={2}
          >
            <chakra.a
              href='/'
              title='Choc Home Page'
              display='grid'
              alignItems='center'
            >
              <Image
                src='/images/logo.jpg'
                alt='Choc Logo'
                width={80}
                height={80}
              />
              <VisuallyHidden>Drelix</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontSize='xl'
              fontFamily='Roboto'
              fontWeight='400'
              pl={12}
            >
              Drelix
            </chakra.h1>
          </Grid>

          <Grid
            templateColumns='repeat(6, 1fr)'
            alignItems='center'
            gridColumnGap={1}
            display={{
              base: 'none',
              md: 'grid',
            }}
          >
            {pageLinks.map((link) => (
              <>
                <Link href={link} key={uuidv4()}>
                  <Button
                    w='full'
                    variant='ghost'
                    fontFamily='Roboto'
                    fontWeight='400'
                  >
                    {formatString(link)}
                  </Button>
                </Link>
              </>
            ))}
          </Grid>

          <Box
            display={{
              base: 'grid',
              md: 'none',
            }}
          >
            <IconButton
              aria-label='Open menu'
              fontSize='20px'
              color='gray.800'
              _dark={{
                color: 'inherit',
              }}
              variant='ghost'
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos='absolute'
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection='column'
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded='sm'
              shadow='sm'
            >
              <CloseButton
                aria-label='Close menu'
                onClick={mobileNav.onClose}
              />
              {pageLinks.map((link) => (
                <>
                  <Link href={link} key={uuidv4()}>
                    <Button
                      w='full'
                      variant='ghost'
                      fontFamily='Roboto'
                      fontWeight='400'
                    >
                      {formatString(link)}
                    </Button>
                  </Link>
                </>
              ))}
            </VStack>
          </Box>
        </Grid>
      </chakra.header>
    </div>
  );
};
export default Header;
