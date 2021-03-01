import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    html {
      box-sizing: border-box;
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

    a {
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
