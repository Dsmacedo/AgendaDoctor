import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from '../_entity/medico.entity';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(Medico)
    private medicoRepository: Repository<Medico>,
  ) {}

  create(data: CreateMedicoDto) {
    const novo = this.medicoRepository.create(data);
    return this.medicoRepository.save(novo);
  }

  findAll() {
    return this.medicoRepository.find();
  }

  async findById(id: number) {
    const medico = await this.medicoRepository.findOneBy({ id });
    if (!medico) throw new NotFoundException('Médico não encontrado');
    return medico;
  }

  async update(id: number, data: UpdateMedicoDto) {
    await this.medicoRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number) {
    const medico = await this.findById(id);
    return this.medicoRepository.remove(medico);
  }
}
