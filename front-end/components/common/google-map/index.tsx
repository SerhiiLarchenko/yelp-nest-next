import GoogleMapReact from 'google-map-react';

import { Marker } from './marker';
import { GoogleMapProps } from './types';
import * as S from './styles';
import { mapOptions } from './config';

const GoogleMap = ({
  size,
  item,
  hoveredItem,
  onChildMouseEnter,
  onChildMouseLeave,
}: GoogleMapProps) => {
  const handleApiLoaded = (map) => {
    const bounds = new window.google.maps.LatLngBounds();

    if (Array.isArray(item)) {
      item.forEach(({ coordinates: { latitude: lat, longitude: lng } }) =>
        bounds.extend({ lat, lng })
      );

      map.setCenter(bounds.getCenter());
      map.fitBounds(bounds);
    }
  };

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
          bootstrapURLKeys={{
            key: process.env.GOOGLE_API_KEY as string,
          }}
          defaultCenter={center}
          defaultZoom={12}
          options={mapOptions}
          onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
          yesIWantToUseGoogleMapApiInternals
          onChildMouseEnter={onChildMouseEnter}
          onChildMouseLeave={onChildMouseLeave}
        >
          {Array.isArray(item) ? (
            item.map(({ image_url, coordinates, id }) => (
              <Marker
                key={id}
                id={id}
                url={image_url}
                lat={coordinates.latitude}
                lng={coordinates.longitude}
                isCardHovered={hoveredItem === id}
              />
            ))
          ) : (
            <Marker
              id={item.id}
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
