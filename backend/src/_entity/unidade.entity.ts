import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Disponibilidade } from './disponibilidade.entity';

@Entity('unidades')
export class Unidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_unidade: string;

  @Column()
  cep: string;

  @Column()
  endereco: string;

  @Column()
  numerocasa: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @OneToMany(
    () => Disponibilidade,
    (disponibilidade) => disponibilidade.unidade,
  )
  disponibilidades: Disponibilidade[];
}
