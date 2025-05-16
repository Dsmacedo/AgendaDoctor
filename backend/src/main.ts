// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa CORS (ajuste conforme o domínio do seu frontend)
  app.enableCors({
    origin: 'http://localhost:3000', // ou o domínio do seu frontend
    credentials: true,
  });

  // Segurança básica de cabeçalhos HTTP
  app.use(helmet());

  // Validação automática de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove propriedades extras não definidas no DTO
      forbidNonWhitelisted: true, // lança erro se enviar propriedades extras
      transform: true, // transforma dados para os tipos definidos nos DTOs
    }),
  );

  await app.listen(8000);
}
bootstrap();
