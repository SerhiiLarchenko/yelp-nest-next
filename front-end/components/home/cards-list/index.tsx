import { StyledCardsList } from './styles';
import { Card } from './card';
import { CardsListProps } from './types';

const CardsList = ({
  businesses,
  hoveredItem,
  setHoveredItem,
}: CardsListProps) => {
  return (
    <StyledCardsList>
      {businesses.map(
        ({ id, name, categories, rating, review_count, image_url }) => (
          <Card
            isHoveredMarker={hoveredItem === id}
            setHoveredItem={setHoveredItem}
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
