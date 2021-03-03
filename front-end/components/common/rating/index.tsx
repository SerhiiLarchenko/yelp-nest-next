import { Icon } from '../icon';
import * as S from './styles';
import { RatingProps } from './types';

const Rating = ({ rating, reviewCount, categories }: RatingProps) => {
  const wholeRating = Math.floor(rating);
  const filledStars = new Array(wholeRating).fill(
    <Icon className="filled" icon="star" />
  );
  const emptyStars = new Array(5 - wholeRating).fill(<Icon icon="star" />);

  return (
    <>
      <S.RatingWrapper>
        <S.RatingList>
          {[...filledStars, ...emptyStars].map((icon, i) => (
            <S.RatingItem key={i}>{icon}</S.RatingItem>
          ))}
        </S.RatingList>
        <S.ReviewCount>({reviewCount})</S.ReviewCount>
      </S.RatingWrapper>
      <S.Categories>
        {categories.map(({ title }) => title).join(', ')}
      </S.Categories>
    </>
  );
};

export { Rating };
