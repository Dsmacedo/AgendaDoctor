import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDisponibilidadeDto {
  @IsNotEmpty()
  @IsString()
  data: string;

  @IsNotEmpty()
  @IsString()
  hora_inicio: string;

  @IsNotEmpty()
  @IsString()
  hora_fim: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  capacidade_maxima: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  medico_id: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  unidade_id: number;
}
