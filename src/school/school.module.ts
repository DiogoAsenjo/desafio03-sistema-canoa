import { Module } from '@nestjs/common';
import { ClassSchedulesModule } from './class-schedules/class-schedules.module';
import { ClassroomsModule } from './classrooms/classrooms.module';

@Module({
  imports: [ClassSchedulesModule, ClassroomsModule]
})
export class SchoolModule {}
