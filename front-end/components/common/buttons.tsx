import styled, { css } from 'styled-components';

const OpenButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ce464d;
  border: 1px solid #d6d7da;
  border-radius: 4px;
  padding: 0px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: #fafafa;
  cursor: pointer;
  height: 48px;
  width: 220px;

  & > span {
    ${(p: { iconPosition: 'left' | 'right' }) =>
      p.iconPosition === 'left'
        ? css`
            margin-left: 8px;
          `
        : css`
            margin-right: 8px;
          `}
  }
`;

export { OpenButton };
