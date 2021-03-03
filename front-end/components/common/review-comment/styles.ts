import styled from 'styled-components';
import { flex } from 'utils';

const Container = styled.li`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 40px;
  }
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
  color: #000000;
`;

const CreationDate = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${(p) => p.theme.colors.text.secondary};
`;

const RatingWrapper = styled.div`
  ${flex.alignCenter}
`;

export {
  Avatar,
  Column,
  UserInfo,
  NickName,
  Container,
  CreationDate,
  RatingWrapper,
};
