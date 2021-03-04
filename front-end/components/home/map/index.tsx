import { useState } from 'react';

import { GoogleMap } from 'components/common';
import { Business } from 'api/businesses/types';

import * as S from './styles';
import { CardsList } from '../cards-list';

const Map = ({ businesses }: { businesses: Business[] }) => {
  const [hoveredItem, setHoveredItem] = useState<string | undefined>(undefined);

  const onChildMouseEnter = (key: string) => {
    setHoveredItem(key);
  };

  const onChildMouseLeave = () => {
    setHoveredItem(undefined);
  };

  return (
    <S.HomeWrapper>
      <CardsList
        businesses={businesses}
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />
      <S.Wrapper>
        <GoogleMap
          hoveredItem={hoveredItem}
          size="large"
          item={businesses}
          onChildMouseEnter={onChildMouseEnter}
          onChildMouseLeave={onChildMouseLeave}
        />
      </S.Wrapper>
    </S.HomeWrapper>
  );
};

export { Map };
