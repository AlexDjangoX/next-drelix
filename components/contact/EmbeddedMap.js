import React from 'react';
import { Box, Center } from '@chakra-ui/react';

const EmbeddedMap = () => {
  return (
    <Center h='calc(100vh - 18rem)' w='100%'>
      <Box
        as='iframe'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.5058716001267!2d19.49941795078768!3d49.8705259792984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47168896b7bd1d83%3A0x42dbf0d2ef48e271!2sOdzie%C5%BC%20robocza%20Drelix!5e0!3m2!1sen!2spl!4v1680874800037!5m2!1sen!2spl'
        width='45rem'
        height='30rem'
        border='0'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Center>
  );
};

export default EmbeddedMap;
