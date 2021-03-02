import { ApiProperty } from '@nestjs/swagger';

export class CoordinatesResponse {
  @ApiProperty({
    type: Number,
    example: 40.78122008871063,
    description: 'Latitude',
  })
  latitude: number;

  @ApiProperty({
    type: Number,
    example: -73.96651768624045,
    description: 'Longitude',
  })
  longitude: number;
}
