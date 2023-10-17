import { Sequelize } from 'sequelize-typescript';
import pg from 'pg';
import { Workout } from 'src/workouts/workout.entity';
import { User } from 'src/users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.HOST,
        port: 5432, // A porta padrão do PostgreSQL
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: 'postgres',
        dialectModule: pg, //Necessário para o deploy na Vercel
        dialectOptions: {
          //Necessário para usar o servidor Postgre no Azure
          ssl: {
            require: true,
          },
        },
      });
      sequelize.addModels([User, Workout]); //Aqui irei colocar os modelos
      await sequelize.sync();

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      return sequelize;
    },
  },
];
