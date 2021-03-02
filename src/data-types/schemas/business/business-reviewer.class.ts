import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessReviewerClass {
  @ApiProperty({
    type: String,
    required: true,
    example: 'Kim G.',
    description: 'Name of the reviewer',
  })
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    example:
      'https://s3-media1.fl.yelpcdn.com/photo/lXrY1Uq7cyD22JnXZl8ExQ/o.jpg',
    description: 'Avatar of the reviewer',
  })
  @Prop({
    type: String,
    required: true,
  })
  image_url: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'https://www.yelp.com/user_details?userid=xLoLsQ6k5GOrPTl0Y7jwxg',
    description: 'Link to Yelp profile of the reviewer',
  })
  @Prop({
    type: String,
    required: true,
  })
  profile_url: string;
}
