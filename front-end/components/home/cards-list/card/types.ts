import { Category } from 'api/businesses/types';

export interface CardProps {
  name: string;
  categories: Category[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
}
