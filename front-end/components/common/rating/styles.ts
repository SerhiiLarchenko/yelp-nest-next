import styled from 'styled-components';

const RatingList = styled.ul`
  display: flex;
  margin-right: 8px;

  .filled {
    path {
      fill: ${(p) => p.theme.colors.primary};
    }
  }
`;

const RatingItem = styled.li`
  :not(:last-child) {
    margin-right: 4px;
  }
`;

export { RatingItem, RatingList };
