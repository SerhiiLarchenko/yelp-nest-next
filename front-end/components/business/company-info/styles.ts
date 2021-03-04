import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-row-gap: 40px;
  margin-bottom: 40px;
  grid-area: info;
`;

const Header = styled.header`
  position: relative;

  & > a {
    position: absolute;
    left: -56px;
    top: 16px;
  }

  @media (max-width: 1024px) {
    & > a {
      left: -32px;
    }
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

  @media (max-width: 910px) {
    max-width: 100%;
  }

  @media (max-width: 572px) {
    padding: 16px 9px;
  }
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
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 8px;
  font-style: initial;
  width: 100%;

  @media (max-width: 572px) {
    width: 50%;
  }
`;

const TransactionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
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

  @media (max-width: 572px) {
    width: 60%;
  }
`;

const AddressWrapper = styled.div`
  display: flex;
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
  AddressWrapper,
};
