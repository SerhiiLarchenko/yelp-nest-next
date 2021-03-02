import styled from 'styled-components';

import { ReactComponent as StarSvg } from 'assets/icons/star.svg';
import { flex } from 'utils';

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
    margin-right: 8px;
  }
`;

export {
  StyledStarSvg,
  StyledRatingList,
  StyledRatingItem,
  StyledRatingWrapper,
};
