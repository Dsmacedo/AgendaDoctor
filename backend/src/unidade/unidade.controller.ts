import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Controller('unidades')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) {}

  @Post()
  create(@Body() data: CreateUnidadeDto) {
    return this.unidadeService.create(data);
  }

  @Get()
  findAll() {
    return this.unidadeService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.unidadeService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateUnidadeDto) {
    return this.unidadeService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.unidadeService.delete(+id);
  }
}
