import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User full name' })
  @IsNotEmpty({ message: 'Full name field is mandatory'})
  fullName: string;

  @ApiProperty({ description: 'User cellphone number' })
  @IsNotEmpty({ message: 'Cellphone field is mandatory'})
  cellphone: string;

  @ApiProperty({ description: 'User email address' })
  @IsNotEmpty({ message: 'E-mail field is mandatory'})
  @IsEmail({}, { message: 'E-mail should be valid' })
  email: string;

  @ApiProperty({
    description: 'User password, should have at least 8 caracters and one of each: lowercase, uppercase, a number and a symbol',
    example: 'Abc@1234',
  })
  @IsNotEmpty({ message: 'Password field is mandatory'})
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
  }, { message: "Password should have at least 8 caracters and one of each: lowercase, uppercase, a number and a symbol" } )
  password: string;
}




