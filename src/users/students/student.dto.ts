import { IsNotEmpty, IsEmail, IsEnum, Length } from 'class-validator';
import { EnrolledPeriod } from './student.entity'; // Importe o ENUM de enrolledPeriod da entidade, se necessário

export class CreateStudentDto {
  @IsNotEmpty({ message: 'fullName is mandatory'})
  fullName: string;

  @IsNotEmpty()
  @Length(10, 15) // Define o comprimento mínimo e máximo para o número de celular
  cellphone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEnum(EnrolledPeriod, {
    message: 'O período de inscrição deve ser "morning", "afternoon" ou "night".',
  })
  enrolledPeriod: string;
}





