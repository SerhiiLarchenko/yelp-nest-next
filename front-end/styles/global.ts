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

    ::-webkit-scrollbar {
      width: 5px;
      background-color: ${(p) => p.theme.colors.scrollbar.bg};
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(p) => p.theme.colors.scrollbar.thumb};
      border-radius: 5px;
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

      @media (max-width: 550px) {
        padding: 0 24px 24px;
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
