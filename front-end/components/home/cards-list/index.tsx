import { Business } from 'api/businesses/types';

import { StyledCardsList } from './styles';
import { Card } from './card';

const CardsList = ({ businesses }: { businesses: Business[] }) => {
  return (
    <StyledCardsList>
      {businesses.map(
        ({ id, name, categories, rating, review_count, image_url }) => (
          <Card
            key={id}
            name={name}
            categories={categories}
            rating={rating}
            reviewCount={review_count}
            imageUrl={image_url}
            id={id}
          />
        )
      )}
    </StyledCardsList>
  );
};

export { CardsList };
