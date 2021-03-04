export interface Category {
  alias: string;
  title: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

interface BusinessLocation {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string;
  cross_streets: string;
}

export enum WeekDays {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

interface DayWorkingHours {
  break_end: string;
  break_start: string;
  days: WeekDays[];
  end: string;
  start: string;
}

export interface BusinessReviewer {
  name: string;
  image_url: string;
  profile_url: string;
}

export interface UserReview {
  text: string;
  rating: number;
  time_created: Date;
  user: BusinessReviewer;
}

enum TransactionsEnum {
  DELIVERY = 'delivery',
  PICKUP = 'pickup',
}

export interface Business {
  categories: Category[];
  coordinates: Coordinates;
  id: string;
  image_url: string;
  name: string;
  rating: number;
  review_count: number;
}

export interface ExtendedBusiness extends Business {
  yelp_id: string;
  alias: string;
  photos: string[];
  url: string;
  transactions: TransactionsEnum[];
  price: string;
  location: BusinessLocation;
  phone: string;
  display_phone: string;
  distance: number;
  working_hours: DayWorkingHours[];
  reviews: UserReview[];
}
