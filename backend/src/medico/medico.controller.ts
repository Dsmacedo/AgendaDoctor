import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Roles } from 'src/auth/roles.decorator';

@Controller('medicos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  @Roles('admin')
  create(@Body() data: CreateMedicoDto) {
    return this.medicoService.create(data);
  }

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.medicoService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateMedicoDto) {
    return this.medicoService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.medicoService.delete(+id);
  }
}
