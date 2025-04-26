
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'node:path';

async function bootstrap() {
  
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: 'profile',
    protoPath: join(__dirname, './protos/profile.proto'),
    url:"localhost:7001"
  },
  });
await app.listen()
}
bootstrap();
