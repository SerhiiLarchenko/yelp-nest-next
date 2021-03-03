import { Business } from 'api/businesses/types';

export interface GoogleMapProps {
  size: 'small' | 'large';
  item: Business | Business[];
}
