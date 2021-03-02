import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

import {
  StyledStarSvg,
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
  const filledStars = new Array(wholeRating).fill(<StyledStarSvg />);
  const emptyStars = new Array(5 - wholeRating).fill(<StarSvg />);

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
