import styled, { css } from 'styled-components';

const hoverStyles = css`
  transform: translate(-50%, -50%) scale(1.2);
`;

const Marker = styled.div<{ url: string; isCardHovered?: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  user-select: none;
  background-image: url(${(p) => p.url});
  background-size: cover;
  cursor: pointer;
  border: 2px solid ${(p) => p.theme.colors.primary};
  transition: ${(p) => p.theme.transition.default};

  :hover {
    ${hoverStyles}
  }

  ${(p) =>
    p.isCardHovered &&
    css`
      ${hoverStyles}
    `}
`;

export { Marker };
