import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Student } from 'src/users/students/student.entity';
import { ClassSchedule } from '../class-schedules/class-schedule.entity';

@Table
export class Clasroom extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => ClassSchedule)
  @Column({})
  classScheduleId: number;

  @ForeignKey(() => Student)
  @Column({})
  teacherId: number;
}