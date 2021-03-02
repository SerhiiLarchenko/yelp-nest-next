import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import { Business } from 'api/businesses/types';

import { CardsList } from '../cards-list';
import { mapContainerStyle, mapOptions } from './config';

const Map = ({ businesses }: { businesses: Business[] }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.GOOGLE_API_KEY}`,
    language: 'en',
  });

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <>
      <CardsList businesses={businesses} />
      <GoogleMap
        options={mapOptions}
        mapContainerStyle={mapContainerStyle}
        zoom={4.8}
        center={{ lat: -34.397, lng: 150.644 }}
      >
        {businesses.map(
          ({
            coordinates: { latitude: lat, longitude: lng },
            id,
            image_url: url,
          }) => (
            <Marker key={id} icon={{ url }} position={{ lat, lng }} />
          )
        )}
      </GoogleMap>
    </>
  );
};

export { Map };
