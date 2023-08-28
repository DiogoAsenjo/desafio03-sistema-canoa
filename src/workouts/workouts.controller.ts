import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateWorkoutDto } from './create-workout.dto';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
    constructor(private readonly workoutsService: WorkoutsService) {}

    @Post()
    async createWorkout(@Res() res: Response, @Body() workoutData: CreateWorkoutDto): Promise<void> {
        try {
            await Workout.create({...workoutData});
            res.status(HttpStatus.OK).send("Workout created succesfully!");
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}
