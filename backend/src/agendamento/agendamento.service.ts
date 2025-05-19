import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Agendamento } from 'src/_entity/agendamento.entity';
import { Disponibilidade } from '../_entity/disponibilidade.entity';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private agendamentoRepo: Repository<Agendamento>,
    @InjectRepository(Disponibilidade)
    private disponibilidadeRepo: Repository<Disponibilidade>,
  ) {}

  async create(dto: CreateAgendamentoDto, usuarioId: number) {
    const disponibilidade = await this.disponibilidadeRepo.findOne({
      where: { id: dto.disponibilidade_id },
      relations: ['agendamentos'],
    });

    if (!disponibilidade)
      throw new NotFoundException('Disponibilidade não encontrada');

    const agendamentoExistente = await this.agendamentoRepo.findOne({
      where: {
        disponibilidade: { id: dto.disponibilidade_id },
        usuario: { id: usuarioId },
      },
      relations: ['usuario', 'disponibilidade'],
    });

    if (agendamentoExistente) {
      throw new BadRequestException('Você já agendou essa consulta');
    }

    if (
      disponibilidade.agendamentos.length >= disponibilidade.capacidade_maxima
    ) {
      throw new BadRequestException('Capacidade máxima atingida');
    }

    const agendamento = this.agendamentoRepo.create({
      sintomas: dto.sintomas,
      usuario: { id: usuarioId },
      disponibilidade,
    });

    return this.agendamentoRepo.save(agendamento);
  }
}
