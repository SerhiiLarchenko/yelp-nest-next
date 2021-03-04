import GoogleMapReact from 'google-map-react';

import { Marker } from 'components/common';
import { Business } from 'api/businesses/types';

import * as S from './styles';
import { CardsList } from '../cards-list';
import { mapOptions } from './config';

const Map = ({ businesses }: { businesses: Business[] }) => {
  return (
    <>
      <CardsList businesses={businesses} />
      <S.MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY as string }}
          defaultCenter={{
            lat: businesses[0].coordinates.latitude,
            lng: businesses[0].coordinates.longitude,
          }}
          defaultZoom={12}
          options={mapOptions}
        >
          {businesses.map(
            ({
              coordinates: { latitude: lat, longitude: lng },
              id,
              image_url,
            }) => (
              <Marker key={id} lat={lat} lng={lng} url={image_url} />
            )
          )}
        </GoogleMapReact>
      </S.MapWrapper>
    </>
  );
};

export { Map };
