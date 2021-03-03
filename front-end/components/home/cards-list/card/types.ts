import { Category } from 'api/businesses/types';

export interface CardProps {
  id: string;
  name: string;
  categories: Category[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
}
