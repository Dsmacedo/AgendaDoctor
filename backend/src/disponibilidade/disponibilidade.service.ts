import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disponibilidade } from '../_entity/disponibilidade.entity';
import { CreateDisponibilidadeDto } from './dto/create-disponibilidade.dto';
import { UpdateDisponibilidadeDto } from './dto/update-disponibilidade.dto';

@Injectable()
export class DisponibilidadeService {
  constructor(
    @InjectRepository(Disponibilidade)
    private readonly disponibilidadeRepository: Repository<Disponibilidade>,
  ) {}

  async create(data: CreateDisponibilidadeDto): Promise<Disponibilidade> {
    const nova = this.disponibilidadeRepository.create(data);
    return this.disponibilidadeRepository.save(nova);
  }

  findAll(): Promise<Disponibilidade[]> {
    return this.disponibilidadeRepository.find();
  }

  async findById(id: number): Promise<Disponibilidade> {
    const disponibilidade = await this.disponibilidadeRepository.findOneBy({
      id,
    });
    if (!disponibilidade) {
      throw new NotFoundException('Disponibilidade não encontrada');
    }
    return disponibilidade;
  }
  ////////////////////////////////////////////////
  // disponibilidade.service.ts

  async findComFiltro(
    medico_id?: number,
    unidade_id?: number,
    data_inicio?: string,
    data_fim?: string,
  ): Promise<Disponibilidade[]> {
    const query = this.disponibilidadeRepository
      .createQueryBuilder('disponibilidade')
      .leftJoinAndSelect('disponibilidade.medico', 'medico')
      .leftJoinAndSelect('disponibilidade.unidade', 'unidade')
      .where('disponibilidade.data >= :data_inicio', {
        data_inicio, // ✅ passar como string no formato correto
      });

    if (data_fim) {
      query.andWhere('disponibilidade.data <= :data_fim', { data_fim });
    }

    if (medico_id) {
      query.andWhere('disponibilidade.medico_id = :medico_id', { medico_id });
    }

    if (unidade_id) {
      query.andWhere('disponibilidade.unidade_id = :unidade_id', {
        unidade_id,
      });
    }

    return await query.getMany();
  }

  /////////////////////////////////////////////////////////////////////////

  async update(
    id: number,
    data: UpdateDisponibilidadeDto,
  ): Promise<Disponibilidade> {
    await this.disponibilidadeRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    const disponibilidade = await this.findById(id);
    await this.disponibilidadeRepository.remove(disponibilidade);
  }
}
