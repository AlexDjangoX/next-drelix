import React from 'react';
import Image from 'next/image';
import { getBucketUrls } from '../../utils/supabase';

export default function index({ urls }) {
  return (
    <>
      <h1>Hello</h1>
      <div>
        {urls?.map((url) => {
          const extension = url.split('.').pop().toLowerCase();
          const scaleFactor = 1 / 3;
          let width = extension === 'png' ? 700 : 702;
          let height = extension === 'png' ? 700 : 1024;
          width = Math.floor(width * scaleFactor);
          height = Math.floor(height * scaleFactor);

          const styles = {
            border: '10px solid white',
            borderRadius: '5px',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            padding: '10px',
          };

          return (
            <Image
              src={url}
              key={url}
              width={width}
              height={height}
              alt='description of the image'
              style={styles}
            />
          );
        })}
      </div>
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
