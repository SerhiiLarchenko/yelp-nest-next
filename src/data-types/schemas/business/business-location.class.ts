import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessLocationClass {
  @ApiProperty({
    type: String,
    required: true,
    example: '18 Harrison Pl',
    description: 'Adress line 1',
  })
  @Prop({
    type: String,
    required: true,
  })
  address1: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '18 Harrison Pl',
    description: 'Adress line 2',
  })
  @Prop({
    type: String,
    required: true,
    default: '',
  })
  address2: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '18 Harrison Pl',
    description: 'Adress line 3',
  })
  @Prop({
    type: String,
    required: true,
    default: '',
  })
  address3: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Brooklyn',
    description: 'City',
  })
  @Prop({
    type: String,
    required: true,
    default: '',
  })
  city: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '11206',
    description: 'ZIP Code',
  })
  @Prop({
    type: String,
    required: true,
    default: '',
  })
  zip_code: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'US',
    description: 'Country',
  })
  @Prop({
    type: String,
    required: true,
    default: 'US',
  })
  country: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'NY',
    description: 'State',
  })
  @Prop({
    type: String,
    required: true,
  })
  state: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '18 Harrison Pl, Brooklyn, NY 11206',
    description: 'Full address',
  })
  @Prop({
    type: String,
    required: true,
  })
  display_address: string;
}
