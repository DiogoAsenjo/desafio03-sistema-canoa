import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Student } from 'src/users/students/student.entity';
import { ClassSchedule } from '../class-schedules/class-schedule.entity';

@Table
export class Clasroom extends Model {
  @ForeignKey(() => ClassSchedule)
  @Column({})
  classScheduleId: number;

  @ForeignKey(() => Student)
  @Column({})
  teacherId: number;
}