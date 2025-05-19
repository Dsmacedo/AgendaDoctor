import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  Unique,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Disponibilidade } from './disponibilidade.entity';

@Unique(['usuario', 'disponibilidade'])
@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sintomas: string;

  @CreateDateColumn()
  data_agendamento: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.agendamentos, { eager: true })
  usuario: Usuario;

  @ManyToOne(() => Disponibilidade, (disp) => disp.agendamentos, {
    eager: true,
  })
  disponibilidade: Disponibilidade;
}
