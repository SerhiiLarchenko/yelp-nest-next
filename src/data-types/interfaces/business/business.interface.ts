import { TransactionsEnum } from 'src/data-types/enums';
import { IBusinessLocation } from './business-location.interface';
import { ICoordinates } from './coordinates.interface';
import { IBusinessCategory } from './business-category.interface';

export interface IBusiness {
  id: string;
  name: string;
  alias: string;
  image_url: string;
  url: string;
  review_count: number;
  categories: IBusinessCategory[];
  rating: number;
  coordinates: ICoordinates;
  transactions: TransactionsEnum[];
  price: string;
  location: IBusinessLocation;
  phone: string;
  display_phone: string;
  distance: number;
}
