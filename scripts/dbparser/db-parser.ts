import { connectDatabase } from '../mongo/mongoose';
import * as mongoose from 'mongoose';
import {
  getBusinessDetails,
  getBusinesses,
  getBusinessReviews,
} from '../axios/yelp';
import { BusinessSchema } from '../../src/data-types/schemas';
import { workingHoursAdapter } from './helpers/working-hours-adapter';
import { reviewsAdapter } from './helpers/reviews-adapter';

const businessModel = mongoose.model('Business', BusinessSchema);

const reqParams = {
  params: {
    location: 'NYC',
    categories: 'Restaurants',
    sort_by: 'rating',
  },
};

(async () => {
  const connection = await connectDatabase();

  console.log('Get data from Yelp');

  try {
    console.log('Getting businesses...');
    const businesses = await getBusinesses(reqParams);
    console.warn(`${businesses.length} businesses was found`);

    console.log('Adding businesses to DB');

    const businessesAdded = await Promise.allSettled(
      businesses.map(async (business) => {
        const businessDetails = await getBusinessDetails(business.id);
        const businessReviews = await getBusinessReviews(business.id);

        const updatedBusiness = {
          ...business,
          _id: mongoose.Types.ObjectId(),
          yelp_id: business.id,
          location: {
            ...business.location,
            display_address: business.location.display_address.join(', '),
            cross_streets: businessDetails.location.cross_streets,
          },
          photos: businessDetails.photos,
          working_hours: workingHoursAdapter(businessDetails.hours),
          reviews: reviewsAdapter(businessReviews),
        };

        return businessModel.findOneAndUpdate(
          { yelp_id: business.id },
          updatedBusiness,
          { new: true, upsert: true, useFindAndModify: false },
        );
      }),
    );

    console.warn(`Updated ${businessesAdded.length} businesses`);
  } catch (error) {
    console.error(error);
  }

  await connection.disconnect();
  process.exit(0);
})();
