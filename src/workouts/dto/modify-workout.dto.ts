import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class ModifyWorkoutDto {
  /*@ApiProperty({ description: 'ID of the workout to be modified' })
  @IsNotEmpty({ message: 'Id field is mandatory' })
  @IsNumber({}, { message: 'Id should be a number' })
  id: number */

  @ApiProperty({ description: 'Date of the workout (in the format: YYYY-MM-DD)' })
  @IsNotEmpty({ message: 'Date field is mandatory' })
  @IsDateString({}, { message: 'Date should be in this format: YYYY-MM-DD' })
  date: Date; //date: string;

  @ApiProperty({ description: 'Time spent on the workout (in the format: HH:MM:SS)' })
  @IsNotEmpty({ message: 'Time spent field is mandatory' })
  @IsString({ message: 'Time spent should be in this format: HH:MM:SS' })
  timeSpent: string;

  @ApiProperty({ description: 'Distance covered during the workout (in kilometers)' })
  @IsNotEmpty({ message: 'Distance field is mandatory' })
  @IsNumber({}, { message: 'Distance should be a number' })
  @Min(0, { message: 'Distance should be greater than zero' })
  distance: number;

  @ApiProperty({ description: 'Maximum speed achieved during the workout (in km/h)' })
  @IsNotEmpty({ message: 'Max speed field is mandatory' })
  @IsNumber({}, { message: 'Max speed should be a number' })
  @Min(0, { message: 'Max speed should be greater than zero' })
  maxSpeed: number;

  @ApiProperty({ description: 'Average speed during the workout (in km/h)' })
  @IsNotEmpty({ message: 'Average speed field is mandatory' })
  @IsNumber({}, { message: 'Average speed should be a number' })
  @Min(0, { message: 'Average speed should be greater than zero' })
  averageSpeed: number;
}