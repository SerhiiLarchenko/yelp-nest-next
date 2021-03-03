import styled from 'styled-components';

const Marker = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  user-select: none;
  background-image: url(${(p) => p.url});
  background-size: cover;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 56px;
    height: 56px;
    background: linear-gradient(180deg, #fc9da2 0%, #ce464d 100%);
    border-radius: 100%;
    z-index: -1;
  }
`;

export { Marker };
