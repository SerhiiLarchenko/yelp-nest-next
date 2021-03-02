import { Category } from 'api/businesses/types';

export interface RatingProps {
  rating: number;
  reviewCount: number;
  categories: Category[];
}
