import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class DayWorkingHoursClass {
  @ApiProperty({
    type: String,
    required: true,
    example: '0600',
    description: 'When business start working',
  })
  @Prop({
    type: String,
    required: true,
    default: null,
  })
  start: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '2300',
    description: 'When business stop working',
  })
  @Prop({
    type: String,
    required: true,
    default: null,
  })
  end: string;

  @ApiProperty({
    type: Boolean,
    required: true,
    example: true,
    description: 'Is working at night',
  })
  @Prop({
    type: Boolean,
    required: true,
    default: false,
  })
  is_overnight: boolean;
}
