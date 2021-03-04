import styled, { css } from 'styled-components';

const hoverStyles = css`
  transform: translate(-50%, -50%) scale(1.2);
`;

const OuterMarker = styled.div<{ isCardHovered?: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 100%;
  background-color: transparent;
  user-select: none;
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

const InnerMarker = styled.div<{ url: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  user-select: none;
  background-image: url(${(p) => p.url});
  background-size: cover;
  cursor: pointer;
  transition: ${(p) => p.theme.transition.default};
`;

export { InnerMarker, OuterMarker };
