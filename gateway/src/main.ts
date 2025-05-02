import * as dotenv from 'dotenv'
dotenv.config()

import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { CatchEverythingFilter } from './lib/allFilters';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('doda pizza')
  .addBearerAuth()
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, documentFactory);
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);
app.enableCors({
  origin: 'http://localhost:5174',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
}); 
app.useStaticAssets(join(__dirname, '..', 'uploads'), {
  prefix: '/uploads',
});
const httpAdapter = app.get(HttpAdapterHost);
app.useGlobalFilters(new CatchEverythingFilter(httpAdapter));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
