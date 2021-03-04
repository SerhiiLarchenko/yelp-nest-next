import styled from 'styled-components';

const WorkingHoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WorkingHoursInner = styled.div`
  display: flex;
  flex-wrap: wrap;

  span:first-child {
    display: inline-block;
    margin-right: 6px;
  }
`;

export { WorkingHoursWrapper, WorkingHoursInner };
