import { HttpException, Injectable } from '@nestjs/common';
import { Workout } from './workout.entity';
import { ModifyWorkoutDto } from './dto/modify-workout.dto';

@Injectable()
export class WorkoutsService {

    async deleteWorkout(idWorkout: number): Promise<Object> {
        const idExistent = await Workout.findByPk(idWorkout);
        
        if(!idExistent) throw new HttpException("There's no Workout with this id. To see all visit: workouts/all", 400);

        await idExistent.destroy();
        return {
            message: 'Workout deleted sucessfully!',
        };
    }

    async modifyWorkout(workoutId: number, workout: ModifyWorkoutDto): Promise<Object> {
        const idExistent = await Workout.findByPk(workoutId);
        
        if(!idExistent) throw new HttpException("There's no Workout with this id. To see all visit: workouts/all", 400);

        idExistent.date = workout.date;
        idExistent.timeSpent = workout.timeSpent;
        idExistent.distance = workout.distance;
        idExistent.maxSpeed = workout.maxSpeed;
        idExistent.averageSpeed = workout.averageSpeed;
        await idExistent.save();

        return {
            message: "Workout modified with success!",
            workoutModified: workout
        };
    }
}
