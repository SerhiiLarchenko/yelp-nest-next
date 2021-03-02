import styled from 'styled-components';

import { flex } from 'utils';

const StyledHeader = styled.header`
  ${flex.alignCenter}
  min-height: 96px;
`;

const StyledMain = styled.main`
  display: flex;
`;

export { StyledHeader, StyledMain };
