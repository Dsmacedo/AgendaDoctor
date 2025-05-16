import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidade } from '../_entity/especialidade.entity';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@Injectable()
export class EspecialidadeService {
  constructor(
    @InjectRepository(Especialidade)
    private especialidadeRepo: Repository<Especialidade>,
  ) {}

  create(data: CreateEspecialidadeDto): Promise<Especialidade> {
    const nova = this.especialidadeRepo.create(data);
    return this.especialidadeRepo.save(nova);
  }

  findAll(): Promise<Especialidade[]> {
    return this.especialidadeRepo.find();
  }

  async findById(id: number): Promise<Especialidade> {
    const esp = await this.especialidadeRepo.findOneBy({ id });
    if (!esp) throw new NotFoundException('Especialidade não encontrada');
    return esp;
  }

  async update(
    id: number,
    data: UpdateEspecialidadeDto,
  ): Promise<Especialidade> {
    await this.especialidadeRepo.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<Especialidade> {
    const esp = await this.findById(id);
    return this.especialidadeRepo.remove(esp);
  }
}
