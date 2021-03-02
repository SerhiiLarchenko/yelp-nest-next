import { ApiProperty } from '@nestjs/swagger';
import { BusinessCategoryResponse } from './business-category.response';
import { CoordinatesResponse } from './coordinates.response';

export class AllBusinessResponse {
  @ApiProperty({
    type: String,
    example: 'Central Park',
    description: 'Business name',
  })
  name: string;

  @ApiProperty({
    type: String,
    example:
      'https://s3-media2.fl.yelpcdn.com/bphoto/ru79-OUEcTI2_yVQqZBTjQ/o.jpg',
    description: 'Business picture link',
  })
  image_url: string;

  @ApiProperty({
    type: Number,
    example: 5,
    description: 'Business rating',
  })
  rating: number;

  @ApiProperty({
    type: () => [BusinessCategoryResponse],
    description: 'Business categories',
  })
  categories: BusinessCategoryResponse[];

  @ApiProperty({
    type: Number,
    example: 2528,
    description: 'Number of reviews left by customers',
  })
  review_count: number;

  @ApiProperty({
    type: () => CoordinatesResponse,
    description: 'Map coordinates for business',
  })
  coordinates: CoordinatesResponse;
}
