export interface Category {
  alias: string;
  title: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

// interface BusinessLocation {
//   address1: string;
//   address2: string;
//   address3: string;
//   city: string;
//   zip_code: string;
//   country: string;
//   state: string;
//   display_address: string;
//   cross_streets: string;
// }

// interface DayWorkingHours {
//   start: string;
//   end: string;
//   is_overnight: boolean;
// }

// interface BusinessWorkingHours {
//   sun: DayWorkingHours;
//   mon: DayWorkingHours;
//   tue: DayWorkingHours;
//   wed: DayWorkingHours;
//   thu: DayWorkingHours;
//   fri: DayWorkingHours;
//   sat: DayWorkingHours;
//   hours_type: string;
// }

// interface BusinessReviewer {
//   name: string;
//   image_url: string;
//   profile_url: string;
// }

// interface UserReview {
//   text: string;
//   rating: number;
//   time_created: Date;
//   user: BusinessReviewer;
// }

// enum TransactionsEnum {
//   DELIVERY = 'delivery',
//   DELIVERY1 = 'Delivery',
//   PICKUP = 'pickup',
// }

export interface Business {
  categories: Category[];
  coordinates: Coordinates;
  id: string;
  image_url: string;
  name: string;
  rating: number;
  review_count: number;
}
