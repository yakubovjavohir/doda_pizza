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
    url:'0.0.0.0:7003' //0.0.0.0
  },
});
console.log('order');

await app.listen()

console.log('order');

}
bootstrap();
