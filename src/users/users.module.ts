import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  imports: [],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
