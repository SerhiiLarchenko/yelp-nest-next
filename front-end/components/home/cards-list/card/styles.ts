import styled, { css } from 'styled-components';

const hoverStyles = css`
  transform: translateX(10px);
  border-color: ${(p) => p.theme.colors.border.card.hover};
`;

const Card = styled.li<{ isHoveredMarker: boolean }>`
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  ${(p) => css`
    transition: ${p.theme.transition.default};
    border-color: ${p.theme.colors.border.card.default};
  `}

  ${(p) =>
    p.isHoveredMarker &&
    css`
      ${hoverStyles}
    `}

  & > a {
    display: flex;
    padding: 24px;
  }

  .filled {
    path {
      fill: ${(p) => p.theme.colors.primary};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      ${hoverStyles}
    }
  }

  @media (max-width: 1024px) {
    :not(:last-child) {
      margin-bottom: 0;
    }
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

const RatingWrapper = styled.div`
  display: flex;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: ${(p) => p.theme.colors.text.secondary};
`;

const Categories = styled.p`
  font-size: 14px;
`;

export { Card, Title, Image, Inner, RatingWrapper, ReviewCount, Categories };
