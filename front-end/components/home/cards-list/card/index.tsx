import { Rating } from 'components/common';
import { StyledCard, StyledTitle, StyledImage, StyledInner } from './styles';
import { CardProps } from './types';

const Card = ({
  name,
  imageUrl,
  rating,
  categories,
  reviewCount,
}: CardProps) => {
  return (
    <StyledCard>
      <StyledImage imageUrl={imageUrl} />

      <StyledInner>
        <StyledTitle>{name}</StyledTitle>
        <Rating rating={rating} reviewCount={reviewCount} />
        <ul>
          {categories.map(({ title }) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </StyledInner>
    </StyledCard>
  );
};

export { Card };
