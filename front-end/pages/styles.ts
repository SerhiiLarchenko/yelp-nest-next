import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    html {
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      line-height: 24px;
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
      ${(p) => css`
        background-color: ${p.theme.colors.background};
        color: ${p.theme.colors.text.basic};
      `}
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul {
      list-style-type: none;
    }

    button {
      border: none;
      background-color: inherit;
    }
`;

export { GlobalStyles };
