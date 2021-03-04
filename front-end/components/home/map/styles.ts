import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  margin-left: 415px;
  width: 100%;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export { Wrapper, HomeWrapper };
