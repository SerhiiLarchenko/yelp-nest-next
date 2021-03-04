import { LinkTo, Rating } from 'components/common';
import * as S from './styles';
import { CardProps } from './types';

const Card = ({
  name,
  imageUrl,
  rating,
  categories,
  reviewCount,
  id,
  isHoveredMarker,
  setHoveredItem,
}: CardProps) => {
  return (
    <S.Card
      isHoveredMarker={isHoveredMarker}
      onMouseEnter={() => setHoveredItem && setHoveredItem(id)}
      onMouseLeave={() => setHoveredItem && setHoveredItem(undefined)}
    >
      <LinkTo href={`/business/${id}`}>
        <S.Image imageUrl={imageUrl} />

        <S.Inner>
          <S.Title>{name}</S.Title>
          <S.RatingWrapper>
            <Rating rating={rating} />
            <S.ReviewCount>({reviewCount})</S.ReviewCount>
          </S.RatingWrapper>

          <S.Categories>
            {categories.map(({ title }) => title).join(', ')}
          </S.Categories>
        </S.Inner>
      </LinkTo>
    </S.Card>
  );
};

export { Card };
