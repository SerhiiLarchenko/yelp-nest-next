import { v4 as uuidv4 } from 'uuid';

import { Icon } from '../icon';
import * as S from './styles';

const Rating = ({ rating }: { rating: number }) => {
  const wholeRating = Math.floor(rating);
  const filledStars = new Array(wholeRating).fill(
    <Icon className="filled" icon="star" />
  );
  const emptyStars = new Array(5 - wholeRating).fill(<Icon icon="star" />);

  return (
    <S.RatingList>
      {[...filledStars, ...emptyStars].map((icon, i) => (
        <S.RatingItem key={uuidv4()}>{icon}</S.RatingItem>
      ))}
    </S.RatingList>
  );
};

export { Rating };
