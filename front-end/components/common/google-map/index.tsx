import GoogleMapReact from 'google-map-react';

import { Marker } from './marker';

import { GoogleMapProps } from './types';
import * as S from './styles';
import { mapOptions } from './config';

const GoogleMap = ({ size, item }: GoogleMapProps) => {
  const center = Array.isArray(item)
    ? {
        lat: item[0].coordinates.latitude,
        lng: item[0].coordinates.longitude,
      }
    : {
        lat: item.coordinates.latitude,
        lng: item.coordinates.longitude,
      };

  return (
    <>
      <S.MapWrapper size={size}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
          defaultCenter={center}
          defaultZoom={12}
          options={mapOptions}
        >
          {Array.isArray(item) ? (
            item.map(({ image_url, coordinates }) => (
              <Marker
                url={image_url}
                lat={coordinates.latitude}
                lng={coordinates.longitude}
              />
            ))
          ) : (
            <Marker
              url={item.image_url}
              lat={item.coordinates.latitude}
              lng={item.coordinates.longitude}
            />
          )}
        </GoogleMapReact>
      </S.MapWrapper>
    </>
  );
};

export { GoogleMap };
