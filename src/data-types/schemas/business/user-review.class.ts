import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { BusinessReviewerClass } from './business-reviewer.class';

export class UserReviewClass {
  @ApiProperty({
    type: String,
    required: true,
    example:
      "The ongoing pandemic has definitely taken a toll on a lot of businesses and public places since a consumer's mindset to buy anything outside of essentials...",
    description: "User's review text",
  })
  @Prop({
    type: String,
    required: true,
  })
  text: string;

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
    type: Date,
    required: true,
    example: '2020-12-01 07:17:04',
    description: 'Review creation date',
  })
  @Prop({
    type: Date,
    required: true,
  })
  time_created: Date;

  @ApiProperty({
    type: () => BusinessReviewerClass,
    required: true,
    description: 'Reviewer info',
  })
  @Prop({
    type: () => BusinessReviewerClass,
    required: true,
  })
  user: BusinessReviewerClass;
}
