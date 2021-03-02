import styled, { css } from 'styled-components';

const StyledCard = styled.li`
  height: 128px;
  display: flex;
  padding: 24px;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.08);
  border-radius: 16px;

  ${(p) => css`
    border: 1px solid ${p.theme.colors.border.card};
    background-color: ${p.theme.colors.background.card};
  `}

  :not(:last-child) {
    margin-bottom: 24px;
  }

  .filled {
    path {
      fill: ${(p) => p.theme.colors.primary};
    }
  }
`;

const StyledTitle = styled.p`
  font-weight: bold;
`;

const StyledImage = styled.div<{ imageUrl: string }>`
  min-width: 80px;
  min-height: 80px;
  margin-right: 16px;
  border-radius: 4px;
  background: url(${(p) => p.imageUrl}) no-repeat center / cover;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledCard, StyledTitle, StyledImage, StyledInner };
