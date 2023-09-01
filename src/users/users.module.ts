import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  imports: [AuthModule],
  providers: [UsersService, JwtService],
  exports: [UsersService]
})
export class UsersModule {}
