import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';
import { scheduleClass } from '../workout.entity';

export class ModifyWorkoutDto {
  @ApiProperty({
    description: 'Date of the workout (in the format: YYYY-MM-DD)',
    example: '2023-09-06',
  })
  @IsNotEmpty({ message: 'Date field is mandatory' })
  @IsDateString({}, { message: 'Date should be in this format: YYYY-MM-DD' })
  date: Date; //date: string;

  @ApiProperty({ description: 'Schedule of the workout', example: '06h30' })
  @IsNotEmpty({ message: 'Schedule field is mandatory' })
  //@IsString({ message: 'Schedule should be in this format: XXhXX, "Trip" or "Other"' })
  @IsEnum(scheduleClass, {
    message: 'Schedule should be in this format: XXhXX, "Trip" or "Other',
  })
  schedule: scheduleClass;

  @ApiProperty({
    description: 'Time spent on the workout (in the format: HH:MM:SS)',
    example: '01:04:32',
  })
  @IsNotEmpty({ message: 'Time spent field is mandatory' })
  @IsString({ message: 'Time spent should be in this format: HH:MM:SS' })
  timeSpent: string;

  @ApiProperty({
    description: 'Distance covered during the workout (in kilometers)',
    example: 10.4,
  })
  @IsNotEmpty({ message: 'Distance field is mandatory' })
  @IsNumber({}, { message: 'Distance should be a number' })
  @Min(0, { message: 'Distance should be greater than zero' })
  distance: number;

  @ApiProperty({
    description: 'Maximum speed achieved during the workout (in km/h)',
    example: 13.63,
  })
  @IsNotEmpty({ message: 'Max speed field is mandatory' })
  @IsNumber({}, { message: 'Max speed should be a number' })
  @Min(0, { message: 'Max speed should be greater than zero' })
  maxSpeed: number;

  @ApiProperty({
    description: 'Average speed during the workout (in km/h)',
    example: 9.01,
  })
  @IsNotEmpty({ message: 'Average speed field is mandatory' })
  @IsNumber({}, { message: 'Average speed should be a number' })
  @Min(0, { message: 'Average speed should be greater than zero' })
  averageSpeed: number;
}
