import { Injectable } from '@nestjs/common';
import { Workout } from './workout.entity';
import { ModifyWorkoutDto } from './dto/modify-workout.dto';

@Injectable()
export class WorkoutsService {

    async deleteWorkout(idWorkout: number): Promise<string> {
        const idExistent = await Workout.findByPk(idWorkout);
        //if(alreadyRegistered) throw new Error ('User already exists, you should use another email');
        if(!idExistent) return "There's no Workout with this id. To see all visit: workouts/all";
        await idExistent.destroy();
        return 'Workout deleted sucessfully!';
    }

    async modifyWorkout(workout: ModifyWorkoutDto): Promise<string> {
        const idExistent = await Workout.findByPk(workout.id);
        
        if(!idExistent) return "There's no Workout with this id. To see all visit: workouts/all";

        idExistent.date = workout.date;
        idExistent.timeSpent = workout.timeSpent;
        idExistent.distance = workout.distance;
        idExistent.maxSpeed = workout.maxSpeed;
        idExistent.averageSpeed = workout.averageSpeed;
        await idExistent.save();

        return "Workout modified with success!";
    }
}
