import styled from 'styled-components';

const MapWrapper = styled.div<{ size: 'large' | 'small' }>`
  height: ${(p) => (p.size === 'large' ? '783px' : '312px')};
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
`;

export { MapWrapper };
