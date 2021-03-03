import styled from 'styled-components';

const MapWrapper = styled.div<{ size: 'large' | 'small' }>`
  height: ${(p) => (p.size === 'large' ? '810px' : '312px')};
  width: 100%;
`;

export { MapWrapper };
