import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessWorkingHoursClass {
  @ApiProperty({
    type: String,
    isArray: true,
    required: true,
    example: ['Mon', 'Tue', 'Wed'],
    description: 'Days of week',
  })
  @Prop({
    type: () => [String],
    required: true,
    default: null,
  })
  days: string[];

  @ApiProperty({
    type: String,
    required: true,
    example: '6:00AM',
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
    example: '11:00PM',
    description: 'When business stop working',
  })
  @Prop({
    type: String,
    required: true,
    default: null,
  })
  end: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '1:00PM',
    description: 'When business break',
  })
  @Prop({
    type: String,
    required: true,
    default: null,
  })
  break_start: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '2:00PM',
    description: 'When business break finish',
  })
  @Prop({
    type: String,
    required: true,
    default: null,
  })
  break_end: string;
}
