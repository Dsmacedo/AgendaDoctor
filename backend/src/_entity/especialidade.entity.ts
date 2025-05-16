import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('especialidades')
export class Especialidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
