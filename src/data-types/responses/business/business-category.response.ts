import { ApiProperty } from '@nestjs/swagger';

export class BusinessCategoryResponse {
  @ApiProperty({
    type: String,
    example: 'parks',
    description: '',
  })
  alias: string;

  @ApiProperty({
    type: String,
    example: 'Parks',
    description: '',
  })
  title: string;
}
