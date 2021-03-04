import { Business } from 'api/businesses/types';

export interface CardsListProps {
  businesses: Business[];
  hoveredItem?: string;
  setHoveredItem?(id?: string): void;
}
