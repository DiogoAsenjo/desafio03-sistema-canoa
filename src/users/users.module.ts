import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { StudentsModule } from './students/students.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  controllers: [UsersController],
  imports: [StudentsModule, AdminsModule]
})
export class UsersModule {}
