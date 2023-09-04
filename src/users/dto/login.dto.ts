import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {

    @ApiProperty({ description: 'User e-mail' })
    @IsNotEmpty({ message: 'E-mail field is mandatory'})
    email: string;

    @ApiProperty({ description: 'User password' })
    @IsNotEmpty({ message: 'Password field is mandatory'})
    password: string;
}