import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
  })
  password: string;

  //Criar uma coluna com o período que o aluno está matriculado. Procurar o tipo enum.
  /* @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  hasPaidMonthlyFee: boolean; */

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  hasPaidMonthlyFee: boolean;
  
}