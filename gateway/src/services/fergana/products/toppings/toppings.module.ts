import { Module } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { ToppingsController } from './toppings.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE_TOPPING_MODULE } from 'src/common/config/service.name';
import { join } from 'node:path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE_TOPPING_MODULE,
        transport: Transport.GRPC,
        options: {
          package: 'topping',
          protoPath: join(__dirname, '../../../../protos/topping.proto'),
          url:"localhost:7004"
        },
      },
    ]),
  ],
  controllers: [ToppingsController],
  providers: [ToppingsService],
  exports:[ToppingsService]
})
export class ToppingsModule {}
