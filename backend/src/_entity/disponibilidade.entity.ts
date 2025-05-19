import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Unidade } from './unidade.entity';
import { Medico } from './medico.entity';
import { Agendamento } from './agendamento.entity';

@Entity('disponibilidades')
export class Disponibilidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  data: Date;

  @Column()
  hora_inicio: string;

  @Column()
  hora_fim: string;

  @Column()
  capacidade_maxima: number;

  @Column()
  medico_id: number;

  @Column()
  unidade_id: number;

  @ManyToOne(() => Medico)
  @JoinColumn({ name: 'medico_id' }) // 👈 Agora está certo
  medico: Medico;

  @ManyToOne(() => Unidade)
  @JoinColumn({ name: 'unidade_id' }) // 👈 Agora também
  unidade: Unidade;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.disponibilidade)
  agendamentos: Agendamento[];
}
