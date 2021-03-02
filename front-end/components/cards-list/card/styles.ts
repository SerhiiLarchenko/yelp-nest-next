import styled, { css } from 'styled-components';

import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

const StyledCard = styled.li`
  display: flex;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.08);
  border-radius: 16px;

  ${(p) => css`
    border: 1px solid ${p.theme.colors.border.card};
    background-color: ${p.theme.colors.background.card};
  `}
`;

const StyledTitle = styled.p``;

const StyledStarSvg = styled(StarSvg)`
  path: {
    fill: ${(p) => p.theme.colors.primary};
  }
`;

export { StyledCard, StyledStarSvg, StyledTitle };
