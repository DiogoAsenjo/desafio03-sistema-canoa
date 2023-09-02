import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotevn from 'dotenv'
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotevn.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Sistema Canoa')
    .setDescription('API with a Login system and to with a CRUD of workouts')
    .setVersion('1.0')
    .addTag('vaa')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    disableErrorMessages: false,
  }));
  await app.listen(3000);
}
bootstrap();
