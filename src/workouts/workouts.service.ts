import { Injectable } from '@nestjs/common';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutsService {

    async deleteWorkout(idWorkout: number): Promise<string> {
        const idExistent = await Workout.findByPk(idWorkout);
        //if(alreadyRegistered) throw new Error ('User already exists, you should use another email');
        if(!idExistent) return "There's no Workout with this id. To see all visit: workouts/all";
        await idExistent.destroy();
        return 'Workout deleted sucessfully!';
    }
}
