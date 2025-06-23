import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'node:path';

async function bootstrap() {

const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: ['order'],
    protoPath: [
      join(__dirname, './protos/order.proto')
    ],
    url:'localhost:7003'
  },
});
await app.listen()
}
bootstrap();
