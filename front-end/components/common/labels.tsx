import styled from 'styled-components';

const TransactionLabel = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d6d7da;
  border-radius: 4px;
  padding: 0px 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #72758a;
  height: 24px;

  :not(:last-child) {
    margin-right: 8px;
  }
`;

export { TransactionLabel };
