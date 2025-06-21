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
      package: ['topping', 'pizza', 'volume', 'snack', 'dessert', 'tt', 'drink', 'prices', 'fact', 'coffee', 'sauces', 'milkshakes', 'breakfast', 'kidsfave'],
      protoPath: [
        join(__dirname, './protos/topping.proto'),
        join(__dirname, './protos/pizza.proto'),
        join(__dirname, './protos/snack.proto'),
        join(__dirname, './protos/volume.proto'),
        join(__dirname, './protos/dessert.proto'),
        join(__dirname, './protos/t-t.proto'),
        join(__dirname, './protos/drink.proto'),
        join(__dirname, './protos/prices.proto'),
        join(__dirname, './protos/fact.proto'),
        join(__dirname, './protos/coffee.proto'),
        join(__dirname, './protos/sauces.proto'),
        join(__dirname, './protos/milkshakes.proto'),
        join(__dirname, './protos/breakfast.proto'),
        join(__dirname, './protos/kids-fave.proto')
      ],
      url:"fergana:7004"
    },
  });
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen();
}
bootstrap();
