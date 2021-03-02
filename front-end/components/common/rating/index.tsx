import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

import {
  StyledRatingItem,
  StyledRatingList,
  StyledRatingWrapper,
  StyledReviewCount,
  StyledStarSvg,
  StyledCategories,
} from './styles';
import { RatingProps } from './types';

const Rating = ({ rating, reviewCount, categories }: RatingProps) => {
  const wholeRating = Math.floor(rating);
  const filledStars = new Array(wholeRating).fill(<StyledStarSvg />);
  const emptyStars = new Array(5 - wholeRating).fill(<StarSvg />);

  return (
    <>
      <StyledRatingWrapper>
        <StyledRatingList>
          {[...filledStars, ...emptyStars].map((icon, i) => (
            <StyledRatingItem key={i}>{icon}</StyledRatingItem>
          ))}
        </StyledRatingList>
        <StyledReviewCount>({reviewCount})</StyledReviewCount>
      </StyledRatingWrapper>
      <StyledCategories>
        {categories.map(({ title }) => title).join(', ')}
      </StyledCategories>
    </>
  );
};

export { Rating };
