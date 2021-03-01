import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { CategoryClass } from './category.class';
import { CoordinatesClass } from './coordinates.class';
import { TransactionsEnum } from 'src/data-types/enums';
import { BusinessLocationClass } from './business-location.class';

@Schema({
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.__v = undefined;
      ret.id = ret._id;
      ret._id = undefined;
    },
  },
  toObject: {
    transform: (doc, ret) => {
      ret.__v = undefined;
      ret.id = ret._id;
      ret._id = undefined;
    },
  },
})
export class Business extends mongoose.Document {
  @ApiProperty({
    type: String,
    required: true,
    example: '5f27b48e1c3749hf92e98de',
    description: 'Business ID',
  })
  id: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Central Park',
    description: 'Business name',
  })
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'central-park-new-york',
    description: 'Business name alias',
  })
  @Prop({
    type: String,
    required: true,
  })
  alias: string;

  @ApiProperty({
    type: String,
    required: true,
    example:
      'https://s3-media2.fl.yelpcdn.com/bphoto/ru79-OUEcTI2_yVQqZBTjQ/o.jpg',
    description: 'Business picture',
  })
  @Prop({
    type: String,
    required: true,
  })
  image_url: string;

  @ApiProperty({
    type: String,
    required: true,
    example:
      'https://www.yelp.com/biz/central-park-new-york?adjust_creative=IIU2OAGcvIAHeNZd16hURw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=IIU2OAGcvIAHeNZd16hURw',
    description: 'Link to business page',
  })
  @Prop({
    type: String,
    required: true,
  })
  url: string;

  @ApiProperty({
    type: Number,
    required: true,
    example: 2524,
    description: "Number of user's reviews",
  })
  @Prop({
    type: Number,
    required: true,
  })
  review_count: number;

  @ApiProperty({
    type: [CategoryClass],
    required: true,
  })
  @Prop({
    type: [CategoryClass],
    required: true,
  })
  categories: CategoryClass[];

  @ApiProperty({
    type: Number,
    required: true,
    example: 5.0,
    description: 'Rating for the business',
  })
  @Prop({
    type: Number,
    required: true,
  })
  rating: number;

  @ApiProperty({
    type: () => CoordinatesClass,
    required: true,
    description: 'Map Coordinates for business',
  })
  @Prop({
    type: () => CoordinatesClass,
    required: true,
  })
  coordinates: CoordinatesClass;

  @ApiProperty({
    type: [TransactionsEnum],
    required: true,
    example: [TransactionsEnum.DELIVERY, TransactionsEnum.PICKUP],
    description: 'Available transactions',
  })
  @Prop({
    type: [TransactionsEnum],
    required: true,
    default: [],
  })
  transactions: TransactionsEnum[];

  @ApiProperty({
    type: String,
    required: true,
    example: '$$',
    description: 'Price',
  })
  @Prop({
    type: String,
    required: true,
  })
  price: string;

  @ApiProperty({
    type: () => BusinessLocationClass,
    required: true,
    description: 'Business location / address',
  })
  @Prop({
    type: () => BusinessLocationClass,
    required: true,
  })
  location: BusinessLocationClass;

  @ApiProperty({
    type: String,
    required: true,
    example: '+16468860601',
    description: 'Business full phone number',
  })
  @Prop({
    type: String,
    required: true,
  })
  phone: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '(646) 886-0601',
    description: 'Displayable Business phone number',
  })
  @Prop({
    type: String,
    required: true,
  })
  display_phone: string;

  @ApiProperty({
    type: Number,
    required: true,
    example: 5200.877004016517,
    description: '',
  })
  distance: number;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);
