import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { Agendamento } from '../_entity/agendamento.entity';
import { Disponibilidade } from '../_entity/disponibilidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento, Disponibilidade])],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
})
export class AgendamentoModule {}
