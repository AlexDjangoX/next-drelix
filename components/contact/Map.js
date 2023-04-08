import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const Map = () => {
  const [location, setLocation] = useState(null);

  const defaultCenter = {
    lat: 37.7749, // Default latitude
    lng: -122.4194, // Default longitude
  };

  const businessLocation = {
    lat: 37.7749,
    lng: -122.4194,
  };

  useEffect(() => {
    setLocation(businessLocation);
  }, []);

  const renderCustomMarker = () => (
    <Box position='relative' width='120px'>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={1}
        bg='blue.500'
        borderRadius='md'
        p={1}
      >
        <GridItem colSpan={3} rowSpan={1}>
          <Text fontSize='sm' color='white'>
            Your Business Name
          </Text>
        </GridItem>
      </Grid>
      <Box
        position='absolute'
        bottom='-6px'
        left='50%'
        transform='translateX(-50%)'
        width='0'
        height='0'
        borderLeft='6px solid transparent'
        borderRight='6px solid transparent'
        borderTop='12px solid blue.500'
      ></Box>
    </Box>
  );

  const markerIcon = {
    url: `data:image/svg+xml,${encodeURIComponent(
      renderCustomMarker().props.children
    )}`,
    scaledSize: { width: 120, height: 60 },
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={location || defaultCenter}
        zoom={15}
      >
        {location && <Marker position={location} icon={markerIcon} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
