import styled from 'styled-components';

const StyledRatingWrapper = styled.div`
  display: flex;
`;

const StyledRatingList = styled.ul`
  display: flex;
  margin-right: 8px;

  .filled {
    path {
      fill: ${(p) => p.theme.colors.primary};
    }
  }
`;

const StyledRatingItem = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export { StyledRatingList, StyledRatingItem, StyledRatingWrapper };
