import styled from 'styled-components';

import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

const StyledRatingWrapper = styled.div`
  display: flex;
`;

const StyledRatingList = styled.ul`
  display: flex;
  margin-right: 8px;
`;

const StyledStarSvg = styled(StarSvg)`
  path {
    fill: ${(p) => p.theme.colors.primary};
  }
`;

const StyledRatingItem = styled.li`
  :not(:last-child) {
    margin-right: 4px;
  }
`;

const StyledReviewCount = styled.span`
  font-size: 14px;
  color: ${(p) => p.theme.colors.text.secondary};
`;

const StyledCategories = styled.p`
  font-size: 14px;
`;

export {
  StyledStarSvg,
  StyledRatingItem,
  StyledRatingList,
  StyledReviewCount,
  StyledRatingWrapper,
  StyledCategories,
};
