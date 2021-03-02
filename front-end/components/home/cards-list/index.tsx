import { Business } from 'api/businesses/types';

import { StyledCardsList } from './styles';
import { Card } from './card';

const CardsList = ({ businesses }: { businesses: Business[] }) => {
  return (
    <StyledCardsList>
      {businesses.map(
        ({
          id,
          name,
          categories,
          rating,
          review_count: reviewCount,
          image_url: imageUrl,
        }) => (
          <Card
            key={id}
            name={name}
            categories={categories}
            rating={rating}
            reviewCount={reviewCount}
            imageUrl={imageUrl}
          />
        )
      )}
    </StyledCardsList>
  );
};

export { CardsList };
