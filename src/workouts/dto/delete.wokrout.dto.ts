import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class DeleteWorkoutDto {
    @ApiProperty({ description: 'ID of the workout to be deleted' })
    @IsNotEmpty({ message: 'Id field is mandatory' })
    @IsNumber({}, { message: 'Id should be a number' })
    id: number;
}