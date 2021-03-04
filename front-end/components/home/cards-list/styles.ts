import styled from 'styled-components';

const StyledCardsList = styled.ul`
  width: 389px;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 96px;
  bottom: 0;
  padding: 0 20px;

  @media (max-width: 1024px) {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 432px;
    grid-gap: 24px;
  }
`;

export { StyledCardsList };
