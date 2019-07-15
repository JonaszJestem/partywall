import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  if (process.env.NODE_ENV === 'dev') {
    setUpSwagger(app);
  }

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

function setUpSwagger(app) {
  const options = new DocumentBuilder()
    .setTitle('Party wall')
    .setDescription('Application to sell food and drinks')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}

bootstrap();
