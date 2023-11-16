import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [DatabaseModule, UsersModule, WorkoutsModule, AuthModule],
  controllers: [],
  providers: [AuthGuard],
})
export class AppModule {}
