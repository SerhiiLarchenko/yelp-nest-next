import styled, { css } from 'styled-components';

import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

const Card = styled.li`
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

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

const Image = styled.div<{ imageUrl: string }>`
  min-width: 80px;
  min-height: 80px;
  margin-right: 16px;
  border-radius: 4px;
  background: url(${(p) => p.imageUrl}) no-repeat center / cover;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Card, Title, Image, Inner };
