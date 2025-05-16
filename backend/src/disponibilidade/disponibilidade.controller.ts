import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  Query,
  BadRequestException,
} from '@nestjs/common';

import { DisponibilidadeService } from './disponibilidade.service';
import { CreateDisponibilidadeDto } from './dto/create-disponibilidade.dto';
import { UpdateDisponibilidadeDto } from './dto/update-disponibilidade.dto';

@Controller('disponibilidades')
export class DisponibilidadeController {
  constructor(
    private readonly disponibilidadeService: DisponibilidadeService,
  ) {}

  @Post()
  create(@Body() data: CreateDisponibilidadeDto) {
    return this.disponibilidadeService.create(data);
  }

  /////////////////////////////////////////////////////////////////////////////////
  // disponibilidade.controller.ts

  @Get('filtro')
  findComFiltro(
    @Query('medico_id') medico_idStr?: string,
    @Query('unidade_id') unidade_idStr?: string,
    @Query('data_inicio') data_inicio?: string,
    @Query('data_fim') data_fim?: string,
  ) {
    if (!data_inicio) {
      throw new BadRequestException('O parâmetro data_inicio é obrigatório');
    }

    const medico_id = medico_idStr ? Number(medico_idStr) : undefined;
    const unidade_id = unidade_idStr ? Number(unidade_idStr) : undefined;

    return this.disponibilidadeService.findComFiltro(
      medico_id,
      unidade_id,
      data_inicio,
      data_fim,
    );
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.disponibilidadeService.findById(id);
  }

  @Get()
  findAll() {
    return this.disponibilidadeService.findAll();
  }

  /////////////////////////////////////////////////////////////////////////////////
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDisponibilidadeDto,
  ) {
    return this.disponibilidadeService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.disponibilidadeService.delete(id);
  }
}
