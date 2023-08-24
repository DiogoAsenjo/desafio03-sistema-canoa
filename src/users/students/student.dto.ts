import { IsNotEmpty, IsEmail, IsEnum, Length } from 'class-validator';
import { EnrolledPeriod } from './student.entity'; // Importe o ENUM de enrolledPeriod da entidade, se necessário

export class CreateStudentDto {
  @IsNotEmpty({ message: 'fullName is mandatory'})
  fullName: string;

  @IsNotEmpty({ message: 'cellphone is mandatory'})
  @Length(10, 15) // Define o comprimento mínimo e máximo para o número de celular
  cellphone: string;

  @IsNotEmpty({ message: 'email is mandatory'})
  @IsEmail({}, { message: 'email should be validy' })
  email: string;

  @IsNotEmpty({ message: 'password is mandatory'})
  password: string;

  @IsNotEmpty({ message: 'enrolledPeriod is mandatory'})
  @IsEnum(EnrolledPeriod, {
    message: 'EnrolledPeriodo should be: "morning", "afternoon" ou "night".',
  })
  enrolledPeriod: string;
}





