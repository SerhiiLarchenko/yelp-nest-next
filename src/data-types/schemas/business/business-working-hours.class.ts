import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { DayWorkingHoursClass } from './day-working-hours.class';

export class BusinessWorkingHoursClass {
  @ApiProperty({
    type: () => DayWorkingHoursClass,
    required: true,
    description: 'Schaddule for Sunday',
  })
  @Prop({
    type: () => DayWorkingHoursClass,
    required: true,
  })
  sun: DayWorkingHoursClass;

  @ApiProperty({
    type: () => DayWorkingHoursClass,
    required: true,
    description: 'Schaddule for Monday',
  })
  @Prop({
    type: () => DayWorkingHoursClass,
    required: true,
  })
  mon: DayWorkingHoursClass;

  @ApiProperty({
    type: () => DayWorkingHoursClass,
    required: true,
    description: 'Schaddule for Tuesday',
  })
  @Prop({
    type: () => DayWorkingHoursClass,
    required: true,
  })
  tue: DayWorkingHoursClass;

  @ApiProperty({
    type: () => DayWorkingHoursClass,
    required: true,
    description: 'Schaddule for Wednesday',
  })
  @Prop({
    type: () => DayWorkingHoursClass,
    required: true,
  })
  wed: DayWorkingHoursClass;

  @ApiProperty({
    type: () => DayWorkingHoursClass,
    required: true,
    description: 'Schaddule for Thursday',
  })
  @Prop({
    type: () => DayWorkingHoursClass,
    required: true,
  })
  thu: DayWorkingHoursClass;

  @ApiProperty({
    type: () => DayWorkingHoursClass,
    required: true,
    description: 'Schaddule for Friday',
  })
  @Prop({
    type: () => DayWorkingHoursClass,
    required: true,
  })
  fri: DayWorkingHoursClass;

  @ApiProperty({
    type: () => DayWorkingHoursClass,
    required: true,
    description: 'Schaddule for Saturday',
  })
  @Prop({
    type: () => DayWorkingHoursClass,
    required: true,
  })
  sat: DayWorkingHoursClass;

  @ApiProperty({
    type: String,
    required: true,
    example: 'REGULAR',
    description: 'Type of the business work',
  })
  @Prop({
    type: String,
    required: true,
    default: '',
  })
  hours_type: string;
}