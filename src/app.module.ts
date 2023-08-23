import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [DatabaseModule, UsersModule, SchoolModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
