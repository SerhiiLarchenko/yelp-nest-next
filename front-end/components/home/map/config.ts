const mapContainerStyle = {
  width: '100%',
  height: '810px',
  borderRadius: '16px',
};

const mapStyles = [
  {
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: -3,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f1f1f1',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c8c8c8',
      },
      {
        visibility: 'on',
      },
    ],
  },
];

const mapOptions = {
  styles: mapStyles,
  fullscreenControl: false,
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
  disableDoubleClickZoom: true,
};

export { mapContainerStyle, mapOptions };
