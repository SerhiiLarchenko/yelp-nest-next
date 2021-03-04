import styled, { css } from 'styled-components';

const hoverStyles = css`
  @-webkit-keyframes heartBeat {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    14% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }

    28% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    42% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }

    70% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes heartBeat {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    14% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }

    28% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    42% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }

    70% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: calc(1s * 1.3);
  animation-duration: calc(1s * 1.3);
  -webkit-animation-duration: calc(1s * 1.3);
  animation-duration: calc(1s * 1.3);
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
`;

const OuterMarker = styled.div<{ isCardHovered?: boolean }>`
  position: absolute;
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
