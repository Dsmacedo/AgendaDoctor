import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  data_nasc: string;

  @IsNotEmpty()
  @IsString()
  celular: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  cep: string;

  @IsNotEmpty()
  endereco: string;

  @IsNotEmpty()
  numero: string;

  @IsNotEmpty()
  bairro: string;

  @IsNotEmpty()
  cidade: string;

  @IsNotEmpty()
  estado: string;
}
