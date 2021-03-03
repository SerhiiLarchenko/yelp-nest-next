import { GoogleMap } from 'components/common';
import { Business } from 'api/businesses/types';

import * as S from './styles';
import { CardsList } from '../cards-list';

const Map = ({ businesses }: { businesses: Business[] }) => {
  return (
    <>
      <CardsList businesses={businesses} />
      <S.Wrapper>
        <GoogleMap size="large" item={businesses} />
      </S.Wrapper>
    </>
  );
};

export { Map };
