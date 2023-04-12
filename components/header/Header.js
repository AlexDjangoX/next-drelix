import React from 'react';
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

// import Logo from './Logo';

const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  return (
    <>
      <chakra.header
        bg={bg}
        w='full'
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow='md'
        color='brand.yellow.500'
        textShadow='shadow.blackShadow.500'
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
              {/* <Logo /> */}
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontSize='xl'
              fontWeight='600'
              fontFamily="'Roboto', sans-serif"
            >
              Drelix
            </chakra.h1>
          </Grid>

          <Grid
            templateColumns='repeat(5, 1fr)'
            alignItems='center'
            gridColumnGap={1}
            display={{
              base: 'none',
              md: 'grid',
            }}
          >
            <Link href='/boots'>
              <Button w='full' variant='ghost'>
                Boots
              </Button>
            </Link>
            <Link href='/gloves'>
              <Button w='full' variant='ghost'>
                Gloves
              </Button>
            </Link>
            <Link href='/product-images'>
              <Button w='full' variant='ghost'>
                Product Images
              </Button>
            </Link>
            <Link href='/products'>
              <Button w='full' variant='ghost'>
                Add Product
              </Button>
            </Link>
            <Link href='/products-edit'>
              <Button w='full' variant='ghost'>
                Edit Product
              </Button>
            </Link>
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
              <Link href='/rekawice'>
                <Button w='full' variant='ghost'>
                  Rękawice
                </Button>
              </Link>
              <Link href='/rekawice'>
                <Button w='full' variant='ghost'>
                  Rękawice
                </Button>
              </Link>
              <Link href='/rekawice'>
                <Button w='full' variant='ghost'>
                  Rękawice
                </Button>
              </Link>
              <Link href='/rekawice'>
                <Button w='full' variant='ghost'>
                  Rękawice
                </Button>
              </Link>
              <Link href='/rekawice'>
                <Button w='full' variant='ghost'>
                  Rękawice
                </Button>
              </Link>
            </VStack>
          </Box>
        </Grid>
      </chakra.header>
    </>
  );
};
export default Header;
