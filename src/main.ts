import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 6013;
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.enableCors();
  await app.listen(PORT);
}

bootstrap();
