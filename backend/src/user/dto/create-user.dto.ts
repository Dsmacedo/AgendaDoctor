import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  data_nasc: string;

  @IsNotEmpty()
  celular: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  cartaosus: string;

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
