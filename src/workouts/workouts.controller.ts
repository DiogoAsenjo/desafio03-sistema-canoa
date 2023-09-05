import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';
import { ModifyWorkoutDto } from './dto/modify-workout.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiUnauthorizedResponse,
  } from '@nestjs/swagger';

@ApiBearerAuth()  
@ApiTags('Workouts')  
@Controller('workouts')
export class WorkoutsController {
    constructor(private readonly workoutsService: WorkoutsService) {}

    //CREATE WORKOUT
    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Create a new workout' })
    @ApiResponse({
        status: 200,
        description: 'Return a message saying the workout was created and an Object with the data of the workout',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while creating a workout',
    })
    @ApiUnauthorizedResponse({
        description: 'Return a message saying if the user is not authorized',
    })
    
    async createWorkout(@Res() res: Response, @Body() workoutData: CreateWorkoutDto): Promise<void> {
        const newWorkout = await Workout.create({...workoutData});
            res.status(HttpStatus.OK).send({
                message: "Workout created succesfully!",
                workout: newWorkout
            });
        }

    //SHOW ALL WORKOUTS
    @UseGuards(AuthGuard)
    @Get('all')
    @ApiOperation({ summary: 'Show all workouts' })
    @ApiResponse({
        status: 200,
        description: 'Return all workouts registereds in the system',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while showing all workouts',
    })
    @ApiUnauthorizedResponse({
        description: 'Return a message saying if the user is not authorized',
    })
    async showAllWorkouts(@Res() res: Response): Promise<void> {
        try {
            const workouts = await Workout.findAll();
            res.status(HttpStatus.OK).send(workouts);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

     //DELETE A WORKOUT
     @UseGuards(AuthGuard)
     @Delete('/:id')
     @ApiOperation({ summary: 'Delete a workout' })
     @ApiResponse({
        status: 200,
        description: 'Return a message saying the workout was deleted',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while deleting a workout',
    })
    @ApiUnauthorizedResponse({
        description: 'Return a message saying if the user is not authorized',
    })

     async deleteWorkoutById(
        @Res() res: Response, 
        @Param('id') workoutId: number
    ): Promise<void> {
        const response = await this.workoutsService.deleteWorkout(workoutId);
             res.status(HttpStatus.OK).send(response) 
     }

    //MODIFY A WORKOUT
    @UseGuards(AuthGuard)
    @Put('modify/:id')
    @ApiOperation({ summary: 'Modify a workout' })
    @ApiResponse({
        status: 200,
        description: 'Return a message saying the workout was modified an Object with the data of the workout',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while modifying a workout',
    })
    @ApiUnauthorizedResponse({
        description: 'Return a message saying if the user is not authorized',
    })

    async modifyWorkoutById(
        @Res() res: Response,
        @Param('id') workoutId: number, 
        @Body() workout: ModifyWorkoutDto
    ): Promise<void> {
        const response = await this.workoutsService.modifyWorkout(workoutId, workout);
            res.status(HttpStatus.OK).send(response)
    }
}