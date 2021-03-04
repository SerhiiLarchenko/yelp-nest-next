import styled from 'styled-components';

const StyledCardsList = styled.ul`
  width: 389px;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 96px;
  bottom: 0;
  padding: 20px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 325px;
    grid-gap: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 750px) {
    grid-template-columns: auto;
    justify-content: center;
    padding: 0;
    padding-right: 20px;
  }

  @media (max-width: 550px) {
    max-height: 100%;
    overflow: initial;
    padding-right: 0;
  }
`;

export { StyledCardsList };
