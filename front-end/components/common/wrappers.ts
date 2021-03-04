import styled from 'styled-components';

const BusinessWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    'info slider'
    'reviews slider';
  grid-column-gap: 80px;

  @media (max-width: 910px) {
    grid-template-columns: auto;
    grid-template-areas:
      'info'
      'slider'
      'reviews';
  }
`;

const SliderMapWrapper = styled.div`
  grid-area: slider;

  @media (max-width: 910px) {
    margin-bottom: 40px;
  }
`;

export { BusinessWrapper, SliderMapWrapper };
