import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAgendamentoDto {
  @IsNumber()
  disponibilidade_id: number;

  @IsString()
  @IsNotEmpty()
  sintomas: string;
}
