import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { PRODUCT_SERVICE_COFFEE_MODULE } from 'src/common/config/service.name';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { ToppingsModule } from '../toppings/toppings.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE_COFFEE_MODULE,
        transport: Transport.GRPC,
        options: {
          package: 'coffee',
          protoPath: join(__dirname, '../../../../protos/coffee.proto'),
          url:"fergana:7004"
        },
      },
    ]),
    ToppingsModule
  ],
  controllers: [CoffeeController],
  providers: [CoffeeService],
  exports: [CoffeeService],
})
export class CoffeeModule {}
