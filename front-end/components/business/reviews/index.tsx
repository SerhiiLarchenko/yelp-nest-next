import { v4 as uuidv4 } from 'uuid';

import { UserReview } from 'api/businesses/types';
import { OpenButton } from 'components/common/buttons';
import { Icon } from 'components/common/icon';
import { ReviewComment } from 'components/common/review-comment';

import * as S from './styles';

const Reviews = ({ reviews }: { reviews: UserReview[] }) => (
  <S.Container>
    <S.Title>Top Reviews</S.Title>

    <ul>
      {reviews.map(({ user, text, rating, time_created }) => (
        <ReviewComment
          key={uuidv4()}
          user={user}
          text={text}
          rating={rating}
          timeCreated={time_created}
        />
      ))}
    </ul>

    <OpenButton iconPosition="right">
      <span>Show All Reviews</span>
      <Icon icon="view" />
    </OpenButton>
  </S.Container>
);

export { Reviews };
