import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Admin } from '../_entity/admin.entity';
import { Usuario } from '../_entity/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,

    @InjectRepository(Admin)
    private adminRepo: Repository<Admin>,

    @InjectRepository(Usuario)
    private userRepo: Repository<Usuario>,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, senha } = loginDto;

    // Tenta logar como admin
    try {
      return await this.validateAdmin(email, senha);
    } catch (err) {
      try {
        return await this.validateUser(email, senha);
      } catch (err) {
        throw new UnauthorizedException('Email ou senha inválidos');
      }
    }
  }

  async validateAdmin(email: string, senha: string) {
    const admin = await this.adminRepo.findOneBy({ email });
    if (!admin || !(await bcrypt.compare(senha, admin.senha))) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    return {
      token: this.jwtService.sign({
        sub: admin.id,
        email: admin.email,
        role: 'admin',
      }),
      role: 'admin',
    };
  }

  async validateUser(email: string, senha: string) {
    const user = await this.userRepo.findOneBy({ email });
    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    return {
      token: this.jwtService.sign({
        sub: user.id,
        email: user.email,
        role: 'usuario',
      }),
      role: 'usuario',
    };
  }
}
