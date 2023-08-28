import { IsNotEmpty, IsEmail, IsEnum, IsStrongPassword } from 'class-validator';
import { EnrolledPeriod } from '../student.entity';

export class CreateStudentDto {
  @IsNotEmpty({ message: 'Full name field is mandatory'})
  fullName: string;

  @IsNotEmpty({ message: 'Cellphone field is mandatory'})
  cellphone: string;

  @IsNotEmpty({ message: 'E-mail field is mandatory'})
  @IsEmail({}, { message: 'E-mail should be valid' })
  email: string;

  @IsNotEmpty({ message: 'Password field is mandatory'})
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
  }, { message: "Password should have at least 8 caracters and one of each: lowercase, uppercase, a number and a symbol" } )
  password: string;

  @IsNotEmpty({ message: 'Enrolled period field is mandatory'})
  @IsEnum(EnrolledPeriod, {
    message: 'Enrolled period should be: "morning", "afternoon" ou "night".',
  })
  enrolledPeriod: string;
}




