import { css } from 'styled-components';

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const spaceBetween = css`
  ${alignCenter};
  justify-content: space-between;
`;

const center = css`
  ${alignCenter};
  justify-content: center;
`;

const flex = { alignCenter, spaceBetween, center };

export { flex };
