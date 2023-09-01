import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
//import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  imports: [
    //AuthModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UsersService, JwtService],
  exports: [UsersService]
})
export class UsersModule {}
