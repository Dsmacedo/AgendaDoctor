import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Entity('users')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  data_nasc: string;

  @Column()
  celular: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  cartaosus: string;

  @Column()
  cep: string;

  @Column()
  endereco: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.usuario)
  agendamentos: Agendamento[];
}
