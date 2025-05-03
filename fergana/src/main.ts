import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'node:path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AllExceptionsFilter } from './lib/allExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: ['topping', 'pizza', 'ssb', 'snack', 'pc'],
      protoPath: [
        join(__dirname, './protos/topping.proto'),
        join(__dirname, './protos/pizza.proto'),
        join(__dirname, './protos/ssb.proto'),
        join(__dirname, './protos/snack.proto'),
        join(__dirname, './protos/pc.proto'),
      ],
      url:"localhost:7004"
    },
  });
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen();
}
bootstrap();
