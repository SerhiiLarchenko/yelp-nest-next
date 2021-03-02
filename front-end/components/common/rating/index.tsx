import { Icon } from '../icon';
import {
  StyledRatingList,
  StyledRatingItem,
  StyledRatingWrapper,
} from './styles';

const Rating = ({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) => {
  const wholeRating = Math.floor(rating);
  const filledStars = new Array(wholeRating).fill(
    <Icon className="filled" icon="star" />
  );
  const emptyStars = new Array(5 - wholeRating).fill(<Icon icon="star" />);

  return (
    <StyledRatingWrapper>
      <StyledRatingList>
        {[...filledStars, ...emptyStars].map((icon, i) => (
          <StyledRatingItem key={i}>{icon}</StyledRatingItem>
        ))}
      </StyledRatingList>
      <span>({reviewCount})</span>
    </StyledRatingWrapper>
  );
};

export { Rating };
