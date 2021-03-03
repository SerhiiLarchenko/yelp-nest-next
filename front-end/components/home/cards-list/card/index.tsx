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
}: CardProps) => {
  return (
    <S.Card>
      <LinkTo href={`/business/${id}`}>
        <S.Image imageUrl={imageUrl} />

        <S.Inner>
          <S.Title>{name}</S.Title>
          <Rating
            rating={rating}
            reviewCount={reviewCount}
            categories={categories}
          />
        </S.Inner>
      </LinkTo>
    </S.Card>
  );
};

export { Card };
