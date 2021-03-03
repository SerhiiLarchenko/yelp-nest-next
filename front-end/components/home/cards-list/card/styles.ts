import styled, { css } from 'styled-components';

const Card = styled.li`
  min-height: 128px;

  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  :hover {
    transform: translateX(5px);
  }

  ${(p) => css`
    transition: ${p.theme.transition.default};
    border: 1px solid ${p.theme.colors.border.card.default};

    :hover {
      border-color: ${p.theme.colors.border.card.hover};
    }
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
