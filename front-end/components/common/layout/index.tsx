import { ReactNode } from 'react';

import { Icon } from 'components/common/icon';

import * as S from './styles';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <S.Header>
        <Icon icon="logo" />
      </S.Header>
      <S.Main>{children}</S.Main>
    </>
  );
};

export { Layout };
