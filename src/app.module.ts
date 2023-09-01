import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { AuthModule } from './auth/auth.module';
//import { AuthMiddleware } from './middlewares/auth';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule, UsersModule, WorkoutsModule, AuthModule, JwtModule.register({
    global: true,
    secret: '716f925b8fc42ac54bd726d2a424550af5cea212',
    signOptions: { expiresIn: '1h', algorithm: 'HS256' },
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {} /* implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    
    consumer
      .apply(AuthMiddleware)
      .forRoutes('/workouts') //Conferir se todas as rotas decorrentes do workouts servirão.
  }
} */
