import { Rating } from 'components/common';
import * as S from './styles';
import { CardProps } from './types';

const Card = ({
  name,
  imageUrl,
  rating,
  categories,
  reviewCount,
}: CardProps) => {
  return (
    <S.Card>
      <S.Image imageUrl={imageUrl} />

      <S.Inner>
        <S.Title>{name}</S.Title>
        <Rating
          rating={rating}
          reviewCount={reviewCount}
          categories={categories}
        />
      </S.Inner>
    </S.Card>
  );
};

export { Card };
