import { Sequelize } from 'sequelize-typescript';
import pg from 'pg';
import { Student } from 'src/users/students/student.entity';
import { Admin } from 'src/users/admins/admin.entity';
import { Teacher } from 'src/users/teachers/teacher.entity';

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
        dialectOptions: { //Necessário para usar o servidor Postgre no Azure 
            ssl: { 
                require: true
            }
        }
      });
      sequelize.addModels([Teacher, Admin, Student]) //Aqui irei colocar os modelos
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