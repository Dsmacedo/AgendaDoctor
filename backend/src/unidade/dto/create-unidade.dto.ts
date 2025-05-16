import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUnidadeDto {
  @IsNotEmpty()
  @IsString()
  nome_unidade: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  numerocasa: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;
}
