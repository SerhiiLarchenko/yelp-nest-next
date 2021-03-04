import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    html {
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      line-height: 24px;
      font-weight: 500;
      font-size: 16px;

      ${(p) => css`
        background-color: ${p.theme.colors.background};
        color: ${p.theme.colors.text.basic};
      `}
    }

    *, *::after, *::before {
      box-sizing: inherit;
      padding: 0;
      margin: 0;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: auto;
      }
    }

    body {
      padding: 0 80px;

      @media (max-width: 1024px) {
        padding: 0 40px 40px;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul {
      list-style-type: none;
    }

h1 {
font: bold 48px / 56px "Inter";
margin: 0px;
}

    button {
      outline: none;
      border: none;
      background-color: inherit;
    }
`;

export { GlobalStyles };
