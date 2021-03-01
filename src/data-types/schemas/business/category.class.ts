import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryClass {
  @ApiProperty({
    type: String,
    required: true,
    example: 'parks',
    description: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  alias: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Parks',
    description: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  title: string;
}
