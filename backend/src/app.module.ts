import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { MedicoModule } from './medico/medico.module';
import { UnidadeModule } from './unidade/unidade.module';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { DisponibilidadeModule } from './disponibilidade/disponibilidade.module';
import { Usuario } from './_entity/usuario.entity';
import { Admin } from './_entity/admin.entity';
import { Medico } from './_entity/medico.entity';
import { Unidade } from './_entity/unidade.entity';
import { Especialidade } from './_entity/especialidade.entity';
import { Disponibilidade } from './_entity/disponibilidade.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root123',
      database: 'agend_doctor_db',
      entities: [
        Usuario,
        Admin,
        Medico,
        Unidade,
        Especialidade,
        Disponibilidade,
      ],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    AdminModule,
    MedicoModule,
    UnidadeModule,
    EspecialidadeModule,
    DisponibilidadeModule,
  ],
})
export class AppModule {}
