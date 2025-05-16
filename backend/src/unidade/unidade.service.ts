import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidade } from '../_entity/unidade.entity';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Injectable()
export class UnidadeService {
  constructor(
    @InjectRepository(Unidade)
    private unidadeRepository: Repository<Unidade>,
  ) {}

  create(data: CreateUnidadeDto) {
    const nova = this.unidadeRepository.create(data);
    return this.unidadeRepository.save(nova);
  }

  findAll() {
    return this.unidadeRepository.find();
  }

  async findById(id: number) {
    const unidade = await this.unidadeRepository.findOneBy({ id });
    if (!unidade) throw new NotFoundException('Unidade não encontrada');
    return unidade;
  }

  async update(id: number, data: UpdateUnidadeDto) {
    await this.unidadeRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number) {
    const unidade = await this.findById(id);
    return this.unidadeRepository.remove(unidade);
  }
}
