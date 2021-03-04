import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-row-gap: 40px;
  margin-bottom: 40px;
`;

const Header = styled.header`
  position: relative;

  & > a {
    position: absolute;
    left: -56px;
    top: 16px;
  }
`;

const ServiceInfo = styled.div`
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

const Address = styled.address`
  width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 8px;
  font-style: initial;
`;

const TransactionsList = styled.ul`
  display: flex;
`;

const RatingNumber = styled.span`
  margin-right: 8px;
`;

const Categories = styled.p`
  font-weight: 600;
`;

const RatingWrapper = styled.div`
  display: flex;
`;

const WorkingHours = styled.p`
  width: 100%;
`;

const WorkingHoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  Header,
  Address,
  Container,
  Categories,
  ServiceInfo,
  RatingNumber,
  WorkingHours,
  RatingWrapper,
  ServiceInfoItem,
  TransactionsList,
  WorkingHoursWrapper,
};
