import styled from 'styled-components';

const MapWrapper = styled.div<{ size: 'large' | 'small' }>`
  height: ${(p) => (p.size === 'large' ? '80vh' : '312px')};
  width: 100%;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-height: 419px;
  }
`;

export { MapWrapper };
