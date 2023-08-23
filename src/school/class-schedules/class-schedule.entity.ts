import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Teacher } from 'src/users/teachers/teacher.entity';

@Table
export class ClassSchedule extends Model {
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
  classPeriod: string;

  @ForeignKey(() => Teacher)
  @Column({})
  teacherId: number;
}