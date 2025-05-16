import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNotEmpty()
  @IsString()
  celular: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  crm: string;

  @IsNotEmpty()
  @IsString()
  especialidade: string;
}
