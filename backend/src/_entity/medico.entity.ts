import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Disponibilidade } from './disponibilidade.entity';

@Entity('medicos')
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  genero: string;

  @Column()
  celular: string;

  @Column()
  email: string;

  @Column()
  crm: string;

  @Column()
  especialidade: string;

  @OneToMany(() => Disponibilidade, (disponibilidade) => disponibilidade.medico)
  disponibilidades: Disponibilidade[];
}
