import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Usuario } from '../_entity/usuario.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
  ) {}

  async create(data: CreateUserDto): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(data.senha, 10);
    const novoUsuario = this.userRepository.create({
      ...data,
      senha: hashedPassword,
    });
    return this.userRepository.save(novoUsuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.userRepository.findOneBy({ email });
  }

  async update(id: number, data: UpdateUserDto): Promise<Usuario> {
    if (data.senha) {
      data.senha = await bcrypt.hash(data.senha, 10);
    }
    await this.userRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
