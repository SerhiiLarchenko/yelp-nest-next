import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-row-gap: 40px;
  grid-area: reviews;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #040c35;
`;

export { Container, Title };
