import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {

    @ApiProperty({ description: 'User e-mail', example: 'example@email.com' })
    @IsNotEmpty({ message: 'E-mail field is mandatory'})
    email: string;

    @ApiProperty({ description: 'User password', example: 'Example@2023' })
    @IsNotEmpty({ message: 'Password field is mandatory'})
    password: string;
}