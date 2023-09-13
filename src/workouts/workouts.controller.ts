import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
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

//Interface created to be able to pick user id from JWT. 
interface CustomRequest extends Request {
    user: any;
  }
 
@ApiTags('Workouts')  
@Controller('workouts')
export class WorkoutsController {
    constructor(
        private readonly workoutsService: WorkoutsService,
    ) {}

    //CREATE WORKOUT
    @ApiBearerAuth() 
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
    
    async createWorkout(
        @Res() res: Response, 
        @Body() workoutData: CreateWorkoutDto, 
        @Req() request: CustomRequest
    ): Promise<void> {
        const userPayload = request.user;
        const userId = userPayload.sub;
        const newWorkout = await Workout.create({...workoutData, userId: userId});
            res.status(HttpStatus.OK).send({
                message: "Workout created succesfully!",
                workout: newWorkout
            });
        }
    
    //SHOW SPECIFIC SCHEDULES ONLY    
    @Get('/:schedule')
    @ApiOperation({ summary: 'Show workouts from the selected schedule' })
    @ApiResponse({
        status: 200,
        description: 'Return all workouts from a specific schedule in the system',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while showing the schedule selected workouts',
    })
    async getWorkoutBySchedule(
        @Param('schedule') schedule: string, 
        @Res() res: Response
    ): Promise<void> {
        try {
            const userWorkouts = await Workout.findAll({
                where: {
                    schedule: schedule
                }
            });
            res.status(HttpStatus.OK).send(userWorkouts);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    //SHOW USER WORKOUTS
    @ApiBearerAuth() 
    @UseGuards(AuthGuard)
    @Get('user')
    @ApiOperation({ summary: 'Show user workouts' })
    @ApiResponse({
        status: 200,
        description: 'Return all workouts that the user registered in the system',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while showing user workouts',
    })
    @ApiUnauthorizedResponse({
        description: 'Return a message saying if the user is not authorized',
    })

    async showUserWorkouts(
        @Res() res: Response, 
        @Req() request: CustomRequest
    ): Promise<void> {
        try {
            const userPayload = request.user;
            const userId = userPayload.sub;
            const userWorkouts = await Workout.findAll({
                where: {
                    userId: userId
                }
            });
            //if (!userWorkouts) throw new HttpException("Usuário não possui treinos", 400);
            res.status(HttpStatus.OK).send(userWorkouts);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    //SHOW ALL WORKOUTS
    @Get('all')
    @ApiOperation({ summary: 'Show all workouts' })
    @ApiResponse({
        status: 200,
        description: 'Return all workouts registereds in the system',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while showing all workouts',
    })
    async showAllWorkouts(@Res() res: Response): Promise<void> {
        // try {
            const workouts = await Workout.findAll();
            res.status(HttpStatus.OK).send(workouts);
        // } catch(error) {
        //     console.log(error);
        //     res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        // }
    }

     //DELETE A WORKOUT
     @ApiBearerAuth() 
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
    @ApiBearerAuth() 
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