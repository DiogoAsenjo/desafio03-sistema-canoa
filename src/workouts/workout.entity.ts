import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Workout extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    })
  id: number;
  
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date: Date;

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
