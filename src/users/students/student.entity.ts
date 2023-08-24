import { Table, Column, Model, DataType } from 'sequelize-typescript';

/* export interface InterfaceStudent {
  fullName: string;
  cellphone: string;
  email: string;
  password: string;
  enrolledPeriod: 'morning' | 'afternoon' | 'night';
} */

export enum EnrolledPeriod {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  NIGHT = 'night',
}

@Table
export class Student extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  cellphone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('morning', 'afternoon', 'night'),
    allowNull: false,
  })
  enrolledPeriod: EnrolledPeriod;
}