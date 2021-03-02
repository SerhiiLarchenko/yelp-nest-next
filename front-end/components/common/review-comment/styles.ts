import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const NickName = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const CreationDate = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #72758a;
`;

export { Container, UserInfo, Avatar, NickName, CreationDate, Column };
