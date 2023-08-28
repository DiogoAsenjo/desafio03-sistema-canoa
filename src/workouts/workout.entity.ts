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
    type: DataType.STRING, // Tempo gasto no treino
    allowNull: false,
  })
  timeSpent: string;

  @Column({
    type: DataType.DECIMAL(10, 2), // Distância (usando DECIMAL para precisão)
    allowNull: false,
  })
  distance: number;

  @Column({
    type: DataType.DECIMAL(6, 2), // Velocidade máxima (usando DECIMAL para precisão)
    allowNull: false,
  })
  maxSpeed: number;

  @Column({
    type: DataType.DECIMAL(6, 2), // Velocidade média (usando DECIMAL para precisão)
    allowNull: false,
  })
  averageSpeed: number;
}
