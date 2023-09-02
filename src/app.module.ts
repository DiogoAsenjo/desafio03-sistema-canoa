import { Module} from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UsersModule, WorkoutsModule, /* AuthModule */],//AuthModule já é importado pelo UsersModule, então talvez não existe a necessidade de importar aqui também. 
  controllers: [],
  providers: [],
})
export class AppModule {}
