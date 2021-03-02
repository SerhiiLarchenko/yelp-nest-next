import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CoordinatesClass {
  @ApiProperty({
    type: Number,
    required: true,
    example: 40.78122008871063,
    description: 'Latitude',
  })
  @Prop({
    type: Number,
    required: true,
  })
  latitude: number;

  @ApiProperty({
    type: Number,
    required: true,
    example: -73.96651768624045,
    description: 'Longitude',
  })
  @Prop({
    type: Number,
    required: true,
  })
  longitude: number;
}
