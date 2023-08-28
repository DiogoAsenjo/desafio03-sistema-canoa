import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './create-workout.dto';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutsService {

    async createAccount(newWorkout: CreateWorkoutDto): Promise<string> {
        const alreadyRegistered = await Workout.findOne({
            where: {
              email: newWorkout,
            },
          });
        if(alreadyRegistered) return 'User already exists, you should use another email';
        await Workout.create({...newWorkout});
        return 'Workout registered sucessfully!';
    }
}
