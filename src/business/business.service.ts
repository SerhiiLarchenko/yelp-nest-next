import {
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AllBusinessResponse } from 'src/data-types/responses';
import { Business } from 'src/data-types/schemas';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel('Business') private businessModel: Model<Business>,
  ) {}

  //Returns all businesses
  async getAllBusinesses(): Promise<AllBusinessResponse[]> {
    try {
      const businesses: AllBusinessResponse[] = await this.businessModel.find(
        {},
        {
          name: 1,
          image_url: 1,
          rating: 1,
          categories: 1,
          review_count: 1,
          coordinates: 1,
        },
      );

      return businesses;
    } catch (error) {
      throw new NotImplementedException('critical-db-error');
    }
  }

  //Return business by id
  async getBusinessById(id: string): Promise<Business> {
    let business;

    try {
      business = await this.businessModel.findOne({ _id: id });
    } catch ({ reason }) {
      throw new NotImplementedException(reason.toString());
    }

    if (!business) throw new NotFoundException('business-not-found');

    return business;
  }
}
