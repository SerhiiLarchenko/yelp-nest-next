import { COLORS } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    transition: {
      default: string;
    };
  }
}

const LIGHT_THEME = Object.freeze({
  colors: COLORS,
  transition: {
    default: 'all ease-in-out 0.2s',
  },
});

export { LIGHT_THEME };
