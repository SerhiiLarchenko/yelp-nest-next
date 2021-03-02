import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import { Coordinates } from 'api/businesses/types';

const Map = ({ coordinates }: { coordinates: Coordinates[] }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
    language: 'en',
  });

  if (isLoaded) {
    return (
      <GoogleMap
        options={{
          fullscreenControl: false,
          mapTypeControl: false,
          zoomControl: false,
          streetViewControl: false,
          disableDoubleClickZoom: true,
          minZoom: 2.6,
        }}
        mapContainerStyle={{
          height: '100%',
          width: '100%',
        }}
      >
        {coordinates.map(({ latitude: lat, longitude: lng }) => (
          <Marker position={{ lat, lng }} />
        ))}
      </GoogleMap>
    );
  }

  return <div>Loading</div>;
};

export { Map };
