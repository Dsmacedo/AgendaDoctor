import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidade } from '../_entity/unidade.entity';
import { UnidadeService } from './unidade.service';
import { UnidadeController } from './unidade.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Unidade])],
  controllers: [UnidadeController],
  providers: [UnidadeService],
})
export class UnidadeModule {}
