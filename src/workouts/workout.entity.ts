import { Table, Column, Model, DataType, AllowNull, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/user.entity';

export enum scheduleClass {
  Other = 'Other',
  Trip = 'Trip',
  '05h00' = '05h00',
  '05h30' = '05h30',
  '06h00' = '06h00',
  '06h30' = '06h30',
  '07h30' = '07h30',
  '08h00' = '08h00',
  '08h30' = '08h30',
  '09h30' = '09h30',
  '10h00' = '10h00',
  '12h00' = '12h00',
  '15h00' = '15h00',
  '17h00' = '17h00',
  '18h00' = '18h00',
  '19h00' = '19h00',
}

@Table
export class Workout extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
  
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date: Date;

  @Column({
    type: DataType.ENUM,
    allowNull: false,
    values: Object.values(scheduleClass),
  })
  schedule: scheduleClass;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  timeSpent: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  distance: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  maxSpeed: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  averageSpeed: number;
}