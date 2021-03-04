import { BusinessReviewer } from 'api/businesses/types';

export interface ReviewProps {
  user: BusinessReviewer;
  text: string;
  rating: number;
  timeCreated: Date;
}
