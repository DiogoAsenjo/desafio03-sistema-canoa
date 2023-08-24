import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotevn from 'dotenv'
import { ValidationPipe } from '@nestjs/common';

dotevn.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
  }));
  await app.listen(3000);
}
bootstrap();
