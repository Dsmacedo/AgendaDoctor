import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disponibilidade } from '../_entity/disponibilidade.entity';
import { DisponibilidadeService } from './disponibilidade.service';
import { DisponibilidadeController } from './disponibilidade.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Disponibilidade])],
  providers: [DisponibilidadeService],
  controllers: [DisponibilidadeController],
})
export class DisponibilidadeModule {}
