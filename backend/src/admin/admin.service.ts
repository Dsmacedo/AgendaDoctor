import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Admin } from '../_entity/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  async findOne(id: number): Promise<Admin> {
    const admin = await this.adminRepository.findOneBy({ id });
    if (!admin) {
      throw new NotFoundException('Administrador não encontrado');
    }
    return admin;
  }

  async create(data: CreateAdminDto): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(data.senha, 10);
    const novoAdmin = this.adminRepository.create({
      ...data,
      senha: hashedPassword,
    });
    return this.adminRepository.save(novoAdmin);
  }

  async update(id: number, data: Partial<Admin>): Promise<Admin> {
    await this.adminRepository.update(id, data);
    return this.findOne(id);
  }

  delete(id: number): Promise<void> {
    return this.adminRepository.delete(id).then(() => undefined);
  }
}
