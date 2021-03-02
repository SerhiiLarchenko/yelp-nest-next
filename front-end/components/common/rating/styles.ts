import styled from 'styled-components';

import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

const RatingWrapper = styled.div`
  display: flex;
`;

const RatingList = styled.ul`
  display: flex;
  margin-right: 8px;
`;

const FilledStarSvg = styled(StarSvg)`
  path {
    fill: ${(p) => p.theme.colors.primary};
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

export {
  FilledStarSvg,
  RatingItem,
  RatingList,
  ReviewCount,
  RatingWrapper,
  Categories,
};
