import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  imports: [AuthModule],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
