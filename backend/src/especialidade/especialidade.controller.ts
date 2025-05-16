import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { Especialidade } from '../_entity/especialidade.entity';
import { EspecialidadeService } from './especialidade.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@Controller('especialidades')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Post()
  create(@Body() data: CreateEspecialidadeDto): Promise<Especialidade> {
    return this.especialidadeService.create(data);
  }

  @Get()
  findAll(): Promise<Especialidade[]> {
    return this.especialidadeService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Especialidade> {
    return this.especialidadeService.findById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: UpdateEspecialidadeDto,
  ): Promise<Especialidade> {
    return this.especialidadeService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Especialidade> {
    return this.especialidadeService.delete(+id);
  }
}
