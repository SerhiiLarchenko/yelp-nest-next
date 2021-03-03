import styled from 'styled-components';

const RatingWrapper = styled.div`
  display: flex;
`;

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

const ReviewCount = styled.span`
  font-size: 14px;
  color: ${(p) => p.theme.colors.text.secondary};
`;

const Categories = styled.p`
  font-size: 14px;
`;

export { RatingItem, RatingList, ReviewCount, RatingWrapper, Categories };
