import { IsNotEmpty, IsDateString, IsNumber, IsDecimal, IsString, Min, Max, IsNumberString } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty({ message: 'Date field is mandatory' })
  @IsDateString({}, { message: 'Date should be in this format: YYYY-MM-DD' })
  date: string;

  @IsNotEmpty({ message: 'Time spent field is mandatory' })
  @IsString({ message: 'Time spent should be in this format: HH:MM:SS' })
  timeSpent: string;

  @IsNotEmpty({ message: 'Distance field is mandatory' })
  @IsNumber({}, { message: 'Distance should be a number' })
  @Min(0, { message: 'Distance should be greater than zero' })
  distance: number;

  @IsNotEmpty({ message: 'Max speed field is mandatory' })
  @IsNumber({}, { message: 'Distance should be a number' })
  @IsDecimal({ decimal_digits: '2' }, { message: 'Max speed should be a decimal number with two cases' })
  @Min(0, { message: 'Max speed should be greater than zero' })
  maxSpeed: number;

  @IsNotEmpty({ message: 'Average speed field is mandatory' })
  @IsDecimal({ decimal_digits: '2' }, { message: 'A velocidade média deve ser um número decimal com até duas casas decimais' })
  @Min(0, { message: 'A velocidade média não pode ser negativa' })
  averageSpeed: number;
}
