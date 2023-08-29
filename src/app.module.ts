import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [DatabaseModule, UsersModule, WorkoutsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
