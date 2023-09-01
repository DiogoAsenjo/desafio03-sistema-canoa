import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';
import { DeleteWorkoutDto } from './dto/delete.wokrout.dto';
import { ModifyWorkoutDto } from './dto/modify-workout.dto';

@Controller('workouts')
export class WorkoutsController {
    constructor(private readonly workoutsService: WorkoutsService) {}

    //CREATE WORKOUT
    @Post()
    async createWorkout(@Res() res: Response, @Body() workoutData: CreateWorkoutDto): Promise<void> {
        try {
            const newWorkout = await Workout.create({...workoutData});
            res.status(HttpStatus.OK).send({
                message: "Workout created succesfully!",
                workout: newWorkout
            });
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    //SHOW ALL WORKOUTS
    @Get('all')
    async showAllWorkouts(@Res() res: Response): Promise<void> {
        try {
            const workouts = await Workout.findAll();
            //Não lembro pra que servia isso e porque não passava direto o workouts, vou deixar aqui por enquanto por precaução.
            /* const allWorkouts = workouts.map((item) => {
                return {
                    id: item.id,
                    date: item.date,
                    timeSpent: item.timeSpent,
                    distance: item.distance,
                    maxSpeed: item.maxSpeed,
                    averageSpeed: item.averageSpeed
                }
            }) */
            res.status(HttpStatus.OK).send(workouts);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    //DELETE A WORKOUT
    @Delete()
    async deleteWorkout(@Res() res: Response, @Body() workoutId: DeleteWorkoutDto): Promise<void> {
        try {
            const idNumber = workoutId.id;
            const response = await this.workoutsService.deleteWorkout(idNumber);
            res.status(HttpStatus.OK).send(response)
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(erro);
        }
    }

    //MODIFY A WORKOUT
    @Put('modify')
    async modifyWorkout(@Res() res: Response, @Body() workout: ModifyWorkoutDto): Promise<void> {
        try {
            const response = await this.workoutsService.modifyWorkout(workout);
            res.status(HttpStatus.OK).send(response)
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(erro);
        }
    }
}
