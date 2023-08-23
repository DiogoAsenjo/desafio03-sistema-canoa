import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  controllers: [UsersController],
  imports: [StudentsModule, TeachersModule, AdminsModule]
})
export class UsersModule {}
