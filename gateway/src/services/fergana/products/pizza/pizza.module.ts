import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE_PIZZA_MODULE } from 'src/common/config/service.name';
import { join } from 'node:path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE_PIZZA_MODULE,
        transport: Transport.GRPC,
        options: {
          package: 'pizza',
          protoPath: join(__dirname, '../../../../protos/pizza.proto'),
          url:"localhost:7004"
        },
      },
    ]),
  ],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
