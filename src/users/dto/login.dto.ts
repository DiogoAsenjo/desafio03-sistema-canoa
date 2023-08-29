import { IsNotEmpty } from "class-validator";

export class LoginDto {

    @IsNotEmpty({ message: 'E-mail field is mandatory'})
    email: string;

    @IsNotEmpty({ message: 'Password field is mandatory'})
    password: string;
}