import styled, { css } from 'styled-components';

import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

const StyledCard = styled.li`
  min-height: 128px;
  display: flex;
  padding: 24px;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  cursor: pointer;

  ${(p) => css`
    border: 1px solid ${p.theme.colors.border.card};
  `}

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

const StyledTitle = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

const StyledImage = styled.div<{ imageUrl: string }>`
  min-width: 80px;
  min-height: 80px;
  margin-right: 16px;
  border-radius: 4px;
  background: url(${(p) => p.imageUrl}) no-repeat center / cover;
`;

const StyledStarSvg = styled(StarSvg)`
  path: {
    fill: ${(p) => p.theme.colors.primary};
  }
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledCard, StyledStarSvg, StyledTitle, StyledImage, StyledInner };
