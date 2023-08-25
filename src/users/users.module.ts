import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { StudentsModule } from './students/students.module';
import { AdminsModule } from './admins/admins.module';
import { StudentsService } from './students/students.service';

@Module({
  controllers: [UsersController],
  imports: [StudentsModule, AdminsModule],
  providers: [StudentsService]
})
export class UsersModule {}
