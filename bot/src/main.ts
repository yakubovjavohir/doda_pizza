import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { AllExceptionsFilter } from './lib/allExceptionFilter';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'bot',
      protoPath: join(__dirname, './protos/bot.proto'),
      url:"localhost:7005"
    },
  });

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen()
  
}
bootstrap();
