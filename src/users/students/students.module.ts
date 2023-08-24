import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';

@Module({
  controllers: [],
  providers: [StudentsService]
})
export class StudentsModule {}
