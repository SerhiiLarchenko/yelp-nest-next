import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-row-gap: 40px;
`;

const Category = styled.p`
  font-weight: 600;
`;

const ServiceInfo = styled.ul`
  display: grid;
  grid-row-gap: 16px;
  background: #fafafa;
  border: 1px solid #d6d7da;
  border-radius: 4px;
  max-width: 498px;
  padding: 16px 24px;
`;

const ServiceInfoItem = styled.div`
  display: flex;

  .home-icon,
  .smartphone-icon,
  .clock-icon {
    margin-right: 8px;
  }

  .with-margin-right {
    margin-right: 8px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const Address = styled.span`
  width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 8px;
`;

export { Address, Container, ServiceInfo, Category, ServiceInfoItem };
