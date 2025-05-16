import { IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  nome?: string;

  @IsOptional()
  cpf?: string;

  @IsOptional()
  data_nasc?: string;

  @IsOptional()
  celular?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  senha?: string;

  @IsOptional()
  cartaosus: string;

  @IsOptional()
  cep?: string;

  @IsOptional()
  endereco?: string;

  @IsOptional()
  numero?: string;

  @IsOptional()
  bairro?: string;

  @IsOptional()
  cidade?: string;

  @IsOptional()
  estado?: string;
}
