import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AgendamentoService } from './agendamento.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { JwtUser } from '../auth/interfaces/jwt-user.interface';

@Controller('agendamentos')
@UseGuards(JwtAuthGuard)
export class AgendamentoController {
  constructor(private readonly service: AgendamentoService) {}

  @Post()
  async create(@Body() dto: CreateAgendamentoDto, @Req() req: Request) {
    const usuario = req.user as JwtUser;

    if (!usuario?.id) throw new UnauthorizedException();

    return this.service.create(dto, usuario.id);
  }
}
