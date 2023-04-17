import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { getBucketUrls } from '../../utils/supabase';
import { Grid, GridItem } from '@chakra-ui/react';

export default function index({ urls }) {
  const styles = {
    border: '1px solid black',
    borderRadius: '3px',
    boxShadow: '4px 4px 2px rgba(120, 120, 120, 0.3)',
  };

  const hoverStyles = `
.hoverable-image {
  transition: transform 0.9s ease;
}

.hoverable-image:hover {
  transform: scale(1.01) rotate(1deg);
  box-shadow: 5px 5px 5px rgba(128, 120, 128, 1);
}

.hoverable-image:hover img {
  opacity: 0.9;
}
`;
  //   const headStyles = `body {
  //     background-color: orange.200;
  //   background-image: url('/images/RPOLICOLOR_1023x1024.jpg');
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-attachment: fixed;
  // }`;

  const headStyles = `
  body {
    background-color: red;
  }
`;

  function HoverableImage(props) {
    return (
      <div className='hoverable-image'>
        <Image {...props} alt='' />

        <style jsx>{hoverStyles}</style>
      </div>
    );
  }

  return (
    <>
      <Head>
        <style jsx>{headStyles}</style>
      </Head>

      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={4}
        p={16}
      >
        {urls?.map((url) => {
          const extension = url.split('.').pop().toLowerCase();
          const scaleFactor = 1 / 3;
          let width = extension === 'png' ? 700 : 700;
          let height = extension === 'png' ? 700 : 700;
          width = Math.floor(width * scaleFactor);
          height = Math.floor(height * scaleFactor);

          return (
            <GridItem key={index} colSpan={0} width={width} height={height}>
              <HoverableImage
                src={url}
                key={url}
                width={width}
                height={height}
                alt='description of the image'
                style={styles}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const urls = await getBucketUrls();

  return {
    props: {
      urls,
    },
  };
}
