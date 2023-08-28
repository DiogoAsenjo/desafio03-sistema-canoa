import { IsNotEmpty, IsNumber } from "class-validator";

export class DeleteWorkoutDto {
    @IsNotEmpty({ message: 'Id field is mandatory' })
    @IsNumber({}, { message: 'Id should be a number' })
    id: number;
}