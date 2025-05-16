import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidade } from '../_entity/especialidade.entity';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidade])],
  controllers: [EspecialidadeController],
  providers: [EspecialidadeService],
})
export class EspecialidadeModule {}
